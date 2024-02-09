export const TaskBanner = ({ userName, taskItems }: { userName:any, taskItems:any }) => (
  <h4
    className="text-white text-center p-4 mb-5 fw-bold"
    style={{ background: "#303030" }}
  >
    {userName}'s Tasks App{" "}
    <span className="text-info">
      ({taskItems.filter((t:any) => !t.done).length} tasks to do)
    </span>
  </h4>
);
