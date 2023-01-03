import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <Modal show centered animation={false}>
            <Modal.Header>
                <Modal.Title><i className="bi-alarm"></i> Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You clicked <strong>{count}</strong> times
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => setCount(count + 1)}>Click Me</Button>
            </Modal.Footer>
        </Modal>
    )
}