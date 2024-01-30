import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

type Props = {}

export default function TaskForm({}: Props) {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Row>
                <Col>
                    <Button variant={showForm ? 'danger' : 'primary'} className='w-100 my-3' onClick={() => setShowForm(!showForm)}>
                        { showForm ? 'Close Form' : 'Add Task +' }
                    </Button>
                </Col>
            </Row>
            {showForm && (
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group className='mb-3'>
                                        <Form.Label>Task Name</Form.Label>
                                        <Form.Control type='text' name='name' placeholder='Enter Task Name' required />
                                        <Form.Label>Task Description</Form.Label>
                                        <Form.Control type='text' name='description' placeholder='Enter Task Description' required />
                                        <Form.Label>Due Date</Form.Label>
                                        <Form.Control type='text' name='description' placeholder='Enter Task Description' />
                                        <Form.Text className="text-muted">Please enter due date in the form of YYYY-MM-DD HH:MM:SS</Form.Text>
                                    </Form.Group>
                                    <Button variant='outline-success' className='w-100' type='submit'>Create Task</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}