import { useState, useRef, useEffect } from "react";

const ToDoForm = (props) => {
  const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
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
        <input
          value={todo}
          onChange={changeHandler}
          className="flex-1 input input-bordered"
          placeholder={props.edit ? "update todo" : "add todo"}
          ref={editInputRef}
          type="text"
        />
        <button type="submit" className="btn btn-success">
          {props.edit ? "update" : "add"}
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
