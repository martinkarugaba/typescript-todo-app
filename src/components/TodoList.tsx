import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) => {
  return (
    <div className="flex justify-center items-start">
      <div className="mt-8 flex  justify-center items-start w-2/3 max-w-4xl gap-x-8">
        {/* active todos */}
        <Droppable droppableId="TodosList">
          {(provided, snapshot) => (
            // create custom css for the drag-active class

            <div
              className={`basis-1/2 bg-teal-500 p-4 ${
                snapshot.isDraggingOver ? "drag-active" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="text-lg text-white font-semibold">
                Active Tasks
              </span>
              {todos.map((todo, index) => {
                return (
                  <SingleTodo
                    index={index}
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {/* completed todos */}
        <Droppable droppableId="TodosRemove">
          {(provided, snapshot) => (
            // create custom css for the drag-complete class

            <div
              className={`basis-1/2 bg-rose-600 p-4 ${
                snapshot.isDraggingOver ? "drag-complete" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="text-lg text-white font-semibold">
                Completed Tasks
              </span>
              {completedTodos.map((todo, index) => {
                return (
                  <SingleTodo
                    index={index}
                    key={todo.id}
                    todo={todo}
                    todos={completedTodos}
                    setTodos={setCompletedTodos}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};
export default TodoList;
