import { useState, useRef, useEffect } from "react";

const ToDoForm = (props) => {
  const [todo, setTodo] = useState("");
  const editInputRef = useRef(null);

  useEffect(() => {
    if (props.edit) {
      editInputRef.current.focus();
    }
  }, []);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("please enter todo!");
      return;
    }
    props.onSubmitTodoHandler(todo);
    setTodo("");
  };

  return (
    <div className="w-full">
      <form className="flex w-full" onSubmit={submitHandler}>
        {props.edit ? (
          <>
            <input
              value={todo}
              ref={editInputRef}
              onChange={changeHandler}
              className="flex-1 input input-bordered"
              placeholder="update todo"
              type="text"
            />
            <button type="submit" className="btn btn-success">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              value={todo}
              onChange={changeHandler}
              className="flex-1 input input-bordered"
              placeholder="add todo"
              type="text"
            />
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ToDoForm;
