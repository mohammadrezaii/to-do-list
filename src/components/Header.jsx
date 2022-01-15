import { useEffect, useState } from "react";

const Header = ({ todos }) => {
  const [uncompletedTodos, setUncompletedTodos] = useState(0);

  useEffect(() => {
    const filterUncompletedTodos = todos.filter((todo) => {
      return todo.isCompleted === false;
    });

    setUncompletedTodos(filterUncompletedTodos.length);
  }, [todos]);

  return (
    <header className="flex justify-center p-8">
      <h4>Uncompleted todos: {uncompletedTodos}</h4>
    </header>
  );
};

export default Header;
