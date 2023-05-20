import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC = ({todos, setTodos}) => {
  return <div>TodoList</div>;
};
export default TodoList;
