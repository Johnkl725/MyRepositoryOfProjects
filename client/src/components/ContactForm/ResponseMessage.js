import React from 'react';
import { Alert } from 'react-bootstrap';

const ResponseMessage = ({ message, error }) => {
    return (
        <Alert variant={error ? 'danger' : 'success'}>
            {message}
        </Alert>
    );
};

export default ResponseMessage;