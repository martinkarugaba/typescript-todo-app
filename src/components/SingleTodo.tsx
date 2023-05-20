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

  return (
    <form className="mt-4">
      <div className="w-[500px] flex justify-between items-center py-2 rounded border">
        {todo.isDone ? (
          <s className="text-white line-through">{todo.todo}</s>
        ) : (
          <p className="text-white">{todo.todo}</p>
        )}
        <div className="w-[80px] flex justify-between items-center">
          <span>
            <AiFillEdit />
          </span>
          <span onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
          <span onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        </div>
      </div>
    </form>
  );
};
export default SingleTodo;
