import { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({
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

  return (
    <form className="mt-4" onSubmit={(e) => handleEdit(e, todo.id)}>
      <div className="w-[500px] flex justify-between items-center p-2 px-3 rounded bg-orange-400">
        {edit ? (
          <>
            <input
              type="text"
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="flex-1 rounded px-3 py-1  outline-none"
            />
            <button type="submit" className="mr-4">
              Done
            </button>
          </>
        ) : todo.isDone ? (
          <s className="text-white line-through">{todo.todo}</s>
        ) : (
          <p className="text-white">{todo.todo}</p>
        )}

        <div className="w-[80px] flex justify-between items-center">
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
  );
};
export default SingleTodo;
