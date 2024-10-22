import { useState } from "react";
import { IoMdAdd } from "react-icons/io";


interface TaskFormProps {
  addTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask(""); // Limpiar campo después de crear tarea
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
        className="border border-black rounded px-3 py-2 mr-2 flex-grow shadow-md"
      />
      <button type="submit" className="bg-blue-700 text-white rounded-full p-2 font-bold text-2xl transition-all hover:scale-105 hover:bg-blue-500 hover:rotate-180 hover:shadow-lg hover:shadow-blue-300">
        <IoMdAdd />
      </button>
    </form>
  );
};

export default TaskForm;
