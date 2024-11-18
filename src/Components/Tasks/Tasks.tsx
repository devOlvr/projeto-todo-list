import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");

  const { tasks, setTasks } = useContext(TasksContext);

  // Função disparada quando o usuário está querendo adicionar uma nova tarefa
  function handleSubmitAddTask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de três letras");
      return;
    }

    // Adicionar Tarefas
    const newTasks = [
      ...tasks, // Pega todas as tarefas que já existiam e coloca novo valor do estado de tarefas.
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTasks(newTasks);

    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTaskTitle("");
  }

  function handleToggleTaskStatus(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  // Utilizar o filter para remover a tarefa do array de tarefas
  function handleRemoveTask(taskId: number) {
    const newArrayTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newArrayTasks);

    localStorage.setItem("tasks", JSON.stringify(newArrayTasks));
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddTask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar Tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <div>
              <li key={task.id}>
                <input
                  type="checkbox"
                  id={`${task.id}`}
                  onChange={() => handleToggleTaskStatus(task.id)}
                />
                <label
                  htmlFor={`${task.id}`}
                  className={task.done ? styles.done : ""}
                >
                  {task.title}
                </label>
              </li>
              <button onClick={() => handleRemoveTask(task.id)}>
                Remover tarefa
              </button>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
