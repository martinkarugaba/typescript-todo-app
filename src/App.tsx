import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from './components/TodoList'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("")
    }
  };

  console.log(todos);

  return (
    <div className="bg-blue-600 h-[100vh] w-[100vw] pt-8 ">
      <h1 className="text-white text-4xl text-center font-bold mb-4">
        Taskify
      </h1>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      <TodoList />
    </div>
  );
};

export default App;
