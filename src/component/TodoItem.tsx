import React from "react";
import { ListGroup } from "react-bootstrap";
import { Todo, useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const { deleteTodo } = useTodoContext();

  return (
    <ListGroup.Item>
      {item.title}
      <button
        className="btn btn-dark mx-2 "
        onClick={() => navigate(`/edit/${item.id}`)}
      >
        Edit
      </button>
      <button className="btn btn-danger " onClick={() => deleteTodo(item.id)}>
        Delete
      </button>
    </ListGroup.Item>
  );
};

export default TodoItem;
