import { useState, useEffect } from "react";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
import { TaskTable } from "./components/TaskTable";
import { Container } from "./components/Container";

function App() {
  const [userName, setUserName] = useState("Informa");
  const [taskItems, setTaskItems] = useState([{ name: "", done: false }]);
  const [showCompleted, setshowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
    setUserName("User");
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName:any) => {
    if (!taskItems.find((t:any) => t.name === taskName))
      setTaskItems([...taskItems, { name: taskName, done: false }]);
  };

  const toggleTask = (task:any) =>
    setTaskItems(
      taskItems.map((t:any) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setshowCompleted(false);
  };

  return (
    <main className="bg-dark vh-100 text-white">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={(checked:any) => setshowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
