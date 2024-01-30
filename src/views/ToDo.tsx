import { useState } from 'react';
import TaskDisplay from '../components/TaskDisplay';
import TaskForm from '../components/TaskForm';
import { Task, TaskFormObject } from '../types';


type Props = {}

export default function ToDo({}: Props) {
    const [ tasks, setTasks ] = useState<Task[]>([]);

    const addNewTask = (newTaskData: TaskFormObject) => {
        let newTask:Task = {
            id: tasks.length + 1,
            name: newTaskData.name!,
            description: newTaskData.description!,
            dateCreated: new Date(),
            completed: false
        }
        if (newTaskData.dueDate){
            newTask.dueDate = new Date(newTaskData.dueDate)
        }
        setTasks([...tasks, newTask])
    }

    return (
        <>
            <TaskForm addNewTask={addNewTask} />
            <TaskDisplay tasks={tasks} />
        </>
    )
}

