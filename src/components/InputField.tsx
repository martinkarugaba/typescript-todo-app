import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  todo,
  setTodo,
  handleAdd,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex flex-col justify-start items-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <div>
        <input
          ref={inputRef}
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="p-2 px-3 rounded"
        />
        <button type="submit" className="ml-2 bg-orange-400 text-white font-medium rounded p-2 px-4">Go</button>
      </div>
    </form>
  );
};
export default InputField;
