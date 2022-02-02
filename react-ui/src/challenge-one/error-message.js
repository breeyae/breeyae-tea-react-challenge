import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';

const ErrorMessage = (props) => {
    return (
        <div className="error-message"><ErrorIcon />{props.children}</div>
    );
};

export default ErrorMessage;