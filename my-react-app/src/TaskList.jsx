import { Link } from "react-router-dom";
import { useGetTasksQuery, useDeleteTaskMutation } from "./tasksApi";

const TaskList = () => {
    const { data: tasks, isLoading } = useGetTasksQuery();
    const [deleteTask] = useDeleteTaskMutation();

    if (isLoading) return <p>Завантаження...</p>;

    return (
        <div>
            <h2>Список завдань</h2>
            <Link to="/task" className="btn btn-primary mb-3">Додати завдання</Link>
            <ul className="list-group">
                {tasks?.map((task) => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{task.title}</h5>
                            <p>{task.description}</p>
                            <span className={`badge bg-${task.priority === "high" ? "danger" : task.priority === "medium" ? "warning" : "success"}`}>
                {task.priority}
              </span>
                            <span className="ms-2">[{task.status}]</span>
                        </div>
                        <div>
                            <Link to={`/task/${task.id}`} className="btn btn-warning me-2">Редагувати</Link>
                            <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Видалити</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
