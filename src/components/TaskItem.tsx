import Basura from "../images/basura.svg";

interface TaskItemProps {
  task: string;
  index: number;
  deleteTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, deleteTask }) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 mb-2 shadow-md rounded transition-all hover:scale-105">
      <p className="text-gray-700">{task}</p>
      <button
        onClick={() => deleteTask(index)}
        className="bg-red-600 text-white p-3 rounded transition-all hover:bg-red-500 hover:shadow-sm hover:shadow-red-400 hover:scale-110"
      >
        <img src={Basura} alt="Delete" className="h-5 w-5" />
        </button>
    </div>
  );
};

export default TaskItem;
