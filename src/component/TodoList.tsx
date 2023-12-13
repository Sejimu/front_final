import { useEffect } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

function TodoList(): JSX.Element {
  const { todos, getTodos } = useTodoContext();

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>TodoList</h1>
      <ListGroup>
        {todos.map((item) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </ListGroup>
    </div>
  );
}

export default TodoList;
