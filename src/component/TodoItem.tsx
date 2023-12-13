import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Todo, useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
import CompletionModal from "./CompletionModal";
interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.completed);
  const navigate = useNavigate();
  const { deleteTodo } = useTodoContext();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      handleShow();
    }
  };

  return (
    <ListGroup.Item style={{ width: "800px" }}>
      <CompletionModal show={show} handleClose={handleClose} />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <label
          className="form-check-label"
          htmlFor="flexCheckDefault"
          style={{ color: "DarkGrey" }}
        >
          Completed
        </label>
      </div>
      {item.title}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          className="btn btn-dark mx-2 "
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          Edit
        </button>
        <button className="btn btn-danger " onClick={() => deleteTodo(item.id)}>
          Delete
        </button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
