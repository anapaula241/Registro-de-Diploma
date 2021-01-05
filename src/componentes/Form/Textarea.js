import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Textarea = ({className, size, lg, label, name, rows }) => {
    return (
        
            <Form.Group className={className} size={size} as={Col} lg={lg}>
              <Form.Label>{label}</Form.Label>
              <Form.Control name={name} as="textarea" rows={rows} />
            </Form.Group>
        
    )
}

export default Textarea
