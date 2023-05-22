import { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone, MdClose } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({
  index,
  todo,
  todos,
  setTodos,
}: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, todo: editTodo } : todo;
      })
    );
    setEdit(false);
  };

  // The type of the ref comes from the element the ref is pointing at
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        // create custom css for the drag class
        <form
          className={`mt-4 ${
            snapshot.isDragging ? "drag" : ""
          }`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="w-full flex justify-between items-center p-2 px-3 rounded bg-orange-400">
            {edit ? (
              <>
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  className="flex-1 rounded px-3 py-1 mr-2 outline-none"
                  ref={inputRef}
                />
                <button
                  type="submit"
                  className="mr-2 px-3 py-1 rounded bg-lime-600 text-white text-base"
                >
                  <MdDone />
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-rose-600 text-white text-base"
                  onClick={() => setEdit(false)}
                >
                  <MdClose />
                </button>
              </>
            ) : todo.isDone ? (
              <s className="text-white line-through">{todo.todo}</s>
            ) : (
              <p className="text-white">{todo.todo}</p>
            )}

            <div
              className={
                !edit
                  ? "w-[80px] flex justify-between items-center"
                  : "hidden"
              }
            >
              {/* edit button */}
              <span
                className="text-white text-xl cursor-pointer"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(!edit);
                  }
                }}
              >
                <AiFillEdit />
              </span>
              {/* delete button */}
              <span
                onClick={() => handleDelete(todo.id)}
                className="text-red-600 text-xl cursor-pointer"
              >
                <AiFillDelete />
              </span>
              {/* Done button */}
              <span
                onClick={() => handleDone(todo.id)}
                className="text-green-600 text-xl cursor-pointer"
              >
                <MdDone />
              </span>
            </div>
          </div>
        </form>
      )}
    </Draggable>
  );
};
export default SingleTodo;
