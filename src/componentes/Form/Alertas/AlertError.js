import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertError = ({texto}) => {
    const [showAlertErro, setShowAlertErro] = React.useState(false);
    return (
        <Alert show={showAlertErro} variant="danger"> <strong><h3> {texto}</h3></strong><hr></hr><div className="d-flex justify-content-end">
        <Button onClick={() => setShowAlertErro(false)} variant="outline-danger"> Fechar</Button> </div>
      </Alert>
    )
}

export default AlertError
