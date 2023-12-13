import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useTodoContext } from "../contexts/TodoContext";
import { tasks } from "../utils/consts";

const RandomTaskGenerator: React.FC = () => {
  const { addTodo } = useTodoContext();
  const [loading, setLoading] = useState(false);

  const getRandomTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    return tasks[randomIndex];
  };

  const handleGenerateTask = async () => {
    setLoading(true);

    const randomTask = getRandomTask();

    try {
      await addTodo({
        id: parseInt(Date()),
        title: randomTask,
        completed: false,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleGenerateTask} disabled={loading}>
        {loading ? "Generating..." : "Generate Random Task"}
      </Button>
    </div>
  );
};

export default RandomTaskGenerator;
