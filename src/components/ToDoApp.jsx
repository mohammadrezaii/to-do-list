import { useState, useEffect } from "react";
import FilterComponent from "./FilterComponent";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoApp = () => {
  const [selectOption, setSelectOption] = useState("All");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todoList") || "[]"));
  }, []);

  useEffect(() => {
    console.log("execute");
    localStorage.setItem("todoList", JSON.stringify([...todos]));
    filteredTodosHandler(selectOption);
  }, [todos, selectOption]);

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

  const filteredTodosHandler = (status) => {
    switch (status.value) {
      case "UnCompleted":
        return setFilteredTodos(
          todos.filter((todo) => todo.isCompleted === false)
        );
      case "Completed":
        return setFilteredTodos(
          todos.filter((todo) => todo.isCompleted === true)
        );
      default:
        return setFilteredTodos([...todos]);
    }
  };

  return (
    <div className="container flex flex-col items-center mx-auto">
      <Header todos={todos} />
      <div className="flex flex-col items-center w-full max-w-xl p-10">
        <FilterComponent
          selectOption={selectOption}
          setSelectOption={setSelectOption}
        />
        <ToDoForm onSubmitTodoHandler={addTodoHandler} />
        <ToDoList
          todos={filteredTodos}
          onDeleteTodoHandler={deleteTodoHandler}
          onCompleteTodoHandler={completeTodoHandler}
          onUpdateTodoHandler={updateTodoHandler}
        />
      </div>
    </div>
  );
};

export default ToDoApp;
