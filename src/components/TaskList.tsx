import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask }) => {
  return (
    <div className="w-full max-w-lg">
      {tasks.slice().reverse().map((task, index) => (
        <TaskItem key={index} task={task} index={tasks.length - 1 - index} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
