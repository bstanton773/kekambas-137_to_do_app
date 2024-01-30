import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TaskCard from './TaskCard';
import { Task } from '../types';



type TaskDisplayProps = {
    tasks: Task[]
}

export default function TaskDisplay({ tasks }: TaskDisplayProps) {
    const completedTasks = tasks.filter( t => t.completed);
    const pendingTasks = tasks.filter(t => !t.completed);
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Pending Tasks</h2>
                </Col>
                {pendingTasks.map( t => <TaskCard task={t} key={t.id} /> )}
            </Row>
            <Row>
                <Col xs={12}>
                    <h2 className='text-center'>Completed Tasks</h2>
                </Col>
                {completedTasks.map( t => <TaskCard task={t} key={t.id} /> )}
            </Row>
        </>
    )
}
