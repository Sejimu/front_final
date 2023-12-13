import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import TodoContext from "./contexts/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TodoContext>
      <App />
    </TodoContext>
  </BrowserRouter>
);
