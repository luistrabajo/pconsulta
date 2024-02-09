import { TaskRow } from "./TaskRow";

export function TaskTable({ tasks, toggleTask, showCompleted = false } :{ tasks:any, toggleTask:any, showCompleted:boolean }) {
  console.log(showCompleted);
  const taskTableRows = (doneValue:any) =>
    tasks
      .filter((task:any) => task.done === doneValue)
      .map((task:any) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <table className="table table-striped table-bordered table-dark border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}
