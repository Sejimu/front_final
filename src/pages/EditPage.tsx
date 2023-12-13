import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useTodoContext, Todo } from "../contexts/TodoContext";

function EditTodoPage(): JSX.Element {
  const { editTodo, oneTodo, getOneTodo } = useTodoContext();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>(oneTodo ? oneTodo.title : "");
  const { id } = useParams();

  useEffect(() => {
    id && getOneTodo(parseInt(id));
  }, [getOneTodo]);

  //   useEffect(() => {
  //     if (oneTodo && !title) {
  //       setTitle(oneTodo.title);
  //     }
  //   }, [oneTodo]);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setTitle(e.target.value);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (!title.trim()) {
      alert("Fill in the input");
      return;
    }
    const newTodo: Todo = {
      title: title,
      id: parseInt(Date()),
      completed: false,
    };
    editTodo(Number(id), newTodo);
    setTimeout(() => {
      navigate("/");
    }, 100);
  }

  return (
    <div>
      <h1 className="text-center mt-4">Edit Todo</h1>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Control
          type="text"
          value={title}
          onChange={handleChange}
          placeholder="Enter todo title"
        />
        <Button
          variant="dark"
          type="submit"
          className="mx-auto d-block mt-2 px-5"
        >
          Save
        </Button>
      </Form>
    </div>
  );
}

export default EditTodoPage;
