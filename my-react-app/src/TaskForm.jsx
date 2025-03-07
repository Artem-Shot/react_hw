import { useParams, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAddTaskMutation, useUpdateTaskMutation, useGetTasksQuery } from "./tasksApi";

const TaskForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: tasks } = useGetTasksQuery();
    const [addTask] = useAddTaskMutation();
    const [updateTask] = useUpdateTaskMutation();

    const isEditing = !!id;
    const task = tasks?.find((t) => t.id === Number(id));

    return (
        <Formik
            initialValues={{
                title: task?.title || "",
                description: task?.description || "",
                status: task?.status || "нове",

            }}
            validationSchema={Yup.object({ title: Yup.string().required("Обов’язкове поле") })}
            onSubmit={(values) => {
                if (isEditing) {
                    updateTask({ id: Number(id), ...values }).then(() => navigate("/"));
                } else {
                    addTask(values).then(() => navigate("/"));
                }
            }}
        >
            <Form className="card card-body">
                <h2>{isEditing ? "Редагувати завдання" : "Нове завдання"}</h2>
                <label>Назва</label>
                <Field name="title" className="form-control" />
                <ErrorMessage name="title" component="div" className="text-danger" />

                <label>Опис</label>
                <Field name="description" className="form-control" />

                <label>Статус</label>
                <Field as="select" name="status" className="form-control">
                    <option value="нове">Нове</option>
                    <option value="в роботі">В роботі</option>
                    <option value="завершене">Завершене</option>
                </Field>

                <button type="submit" className="btn btn-success mt-3">Зберегти</button>
            </Form>
        </Formik>
    );
};

export default TaskForm;
