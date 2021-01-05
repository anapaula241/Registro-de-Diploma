import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertSucess = ({texto, show, onClick, lg}) => {
    // const [showAlert, setShowAlert] = React.useState('');
    return (
        <Alert show={show} variant="success" lg={lg}> <strong><h3> {texto}</h3></strong><hr></hr><div className="d-flex justify-content-end">
        <Button onClick={onClick} variant="outline-success"> Fechar</Button> </div>
      </Alert>
    )
}

export default AlertSucess
