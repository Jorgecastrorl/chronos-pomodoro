import { Home } from "./pages/Home";

import "./styles/themes.css";
import "./styles/global.css";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
