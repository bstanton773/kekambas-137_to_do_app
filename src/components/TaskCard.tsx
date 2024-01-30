import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Task } from '../types';



type TaskCardProps = {
    task: Task
}


export default function TaskCard({ task }: TaskCardProps) {
    return (
        <Col xs={12} md={6} lg={4}>
            <Card bg={task.completed ? "success" : "info"} text="white" className='my-3'>
                <Card.Header>{task.dateCreated.toString()}</Card.Header>
                <Card.Body>
                    <Card.Title>{task.name}</Card.Title>
                    <Card.Text>{task.description}</Card.Text>
                </Card.Body>
                { task.dueDate && <Card.Footer><b>Due:</b> {task.dueDate.toString()}</Card.Footer>  }
            </Card>
        </Col>
    )
}