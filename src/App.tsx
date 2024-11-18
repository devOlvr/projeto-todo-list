import { Header } from "./Components/Header/Header";
import { Tasks } from "./Components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";
import "./styles/global.css";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
