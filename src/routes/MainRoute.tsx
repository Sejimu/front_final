import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../layouts/MainLayout";
import AddTodo from "../pages/AddPage";
import EditTodoPage from "../pages/EditPage";

function MainRoute(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
        children={
          <>
            <Route index element={<HomePage />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="/edit/:id" element={<EditTodoPage />} />
          </>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default MainRoute;
