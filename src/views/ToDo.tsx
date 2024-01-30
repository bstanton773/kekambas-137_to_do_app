import TaskDisplay from '../components/TaskDisplay'


type Task = {
    id: number,
    name: string,
    description: string,
    dateCreated: Date,
    completed: boolean,
    dueDate?: Date
}

type Props = {}

export default function ToDo({}: Props) {
    const tasks: Task[] = [
        {
            id: 1,
            name: 'Finish App',
            dateCreated: new Date('2024-01-30T12:00:00Z'),
            completed: false,
            dueDate: new Date('2024-01-31T12:00:00Z'),
            description: 'Complete the To Do App so that you can keep track of your tasks!',
        },
        {
            id: 2,
            name: 'Finish App',
            dateCreated: new Date('2024-01-30T12:00:00Z'),
            completed: false,
            dueDate: new Date('2024-01-31T12:00:00Z'),
            description: 'Complete the To Do App so that you can keep track of your tasks!',
        },
        {
            id: 3,
            name: 'Finish App',
            dateCreated: new Date('2024-01-30T12:00:00Z'),
            completed: true,
            dueDate: new Date('2024-01-31T12:00:00Z'),
            description: 'Complete the To Do App so that you can keep track of your tasks!',
        },
        {
            id: 4,
            name: 'Finish App',
            dateCreated: new Date('2024-01-30T12:00:00Z'),
            completed: false,
            description: 'Complete the To Do App so that you can keep track of your tasks!',
        },
    ]
    return (
        <>
            <TaskDisplay tasks={tasks} />
        </>
    )
}

