import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

function AddTodo(): JSX.Element {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const { addTodo } = useTodoContext();

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setTitle(e.target.value);
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    if (!title.trim()) {
      alert("Fill in the input");
      return;
    }

    const newTodo = {
      id: parseInt(Date()),
      title,
      completed: false,
    };

    addTodo(newTodo);
    setTitle("");
    navigate("/");
  }

  return (
    <div>
      <h1 className="text-center mt-4">Add Todo</h1>
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
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddTodo;
