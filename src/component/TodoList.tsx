import { useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";
import Button from "react-bootstrap/Button";
import RandomTaskGenerator from "./RandomTaskGenerator";

function TodoList(): JSX.Element {
  const { todos, getTodos } = useTodoContext();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>TodoList</h1>
      <RandomTaskGenerator />
      <ListGroup>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
