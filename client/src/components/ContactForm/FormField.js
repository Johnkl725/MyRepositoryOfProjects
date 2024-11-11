import React from 'react';
import { Form } from 'react-bootstrap';

const FormField = ({ controlId, label, ...props }) => {
    return (
        <Form.Group controlId={controlId} className={props.className}>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...props} required />
        </Form.Group>
    );
};

export default FormField;