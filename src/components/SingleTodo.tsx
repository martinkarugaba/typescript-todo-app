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
  return (
    <form>
      <div>
        <p>{todo.todo}</p>
        <div>
          <span>
            <AiFillEdit />
          </span>
          <span>
            <AiFillDelete />
          </span>
          <span>
            <MdDone />
          </span>
        </div>
      </div>
    </form>
  );
};
export default SingleTodo;
