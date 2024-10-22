import Basura from "../images/basura.svg";

interface TaskItemProps {
  task: string;
  index: number;
  deleteTask: (index: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, deleteTask }) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 mb-2 shadow-md rounded">
      <p className="text-gray-700">{task}</p>
      <button
        onClick={() => deleteTask(index)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        <img src={Basura} alt="Delete" className="h-5 w-5" />
        </button>
    </div>
  );
};

export default TaskItem;
