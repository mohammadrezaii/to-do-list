import { useState } from "react/cjs/react.development";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

const ToDoList = ({
  todos,
  onDeleteTodoHandler,
  onCompleteTodoHandler,
  onUpdateTodoHandler,
}) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const eidtTodoHandler = (newValue) => {
    onUpdateTodoHandler(edit.id, newValue);
    setEdit({ id: null, text: "", isCompleted: false });
  };

  return (
    <div className="w-full px-5 py-10 mt-5 space-y-3 border border-gray-100 rounded-md">
      {edit.id ? (
        <ToDoForm onSubmitTodoHandler={eidtTodoHandler} edit={edit} />
      ) : (
        todos.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              deleteTodoHandler={() => onDeleteTodoHandler(todo.id)}
              completeTodoHandler={() => onCompleteTodoHandler(todo.id)}
              updateTodoHandler={() => setEdit(todo)}
            />
          );
        })
      )}
    </div>
  );
};

export default ToDoList;
