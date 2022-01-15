import { useState, useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todoList") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify([...todos]));
  }, [todos]);

  const addTodoHandler = (todo) => {
    const newToDo = { id: Math.random(), text: todo, isCompleted: false };
    setTodos((prevToDos) => {
      return [...prevToDos, newToDo];
    });
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  const completeTodoHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const updateTodoHandler = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col items-center w-full max-w-xl p-10">
        <ToDoForm onSubmitTodoHandler={addTodoHandler} />
        <ToDoList
          todos={todos}
          onDeleteTodoHandler={deleteTodoHandler}
          onCompleteTodoHandler={completeTodoHandler}
          onUpdateTodoHandler={updateTodoHandler}
        />
      </div>
    </div>
  );
};

export default ToDoApp;
