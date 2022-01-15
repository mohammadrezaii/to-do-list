import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const ToDo = ({
  todo,
  deleteTodoHandler,
  completeTodoHandler,
  updateTodoHandler,
}) => {
  return (
    <div className="w-full flex justify-between items-center p-3 bg-gray-50">
      <div
        onClick={completeTodoHandler}
        className={`flex-1 ${todo.isCompleted ? "line-through" : ""}`}
      >
        {todo.text}
      </div>
      <div className="space-x-2">
        <button
          onClick={updateTodoHandler}
          className="p-2 bg-green-50 rounded-md"
        >
          <AiOutlineEdit color="green" />
        </button>
        <button
          onClick={deleteTodoHandler}
          className="p-2 bg-red-50 rounded-md"
        >
          <AiOutlineDelete color="red" />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
