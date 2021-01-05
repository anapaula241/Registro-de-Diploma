import React from 'react';
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert';
import './LoginForm.css';
import Input from '../Form/Input';
import AlertSucess from '../Form/Alertas/AlertSucess';
import AlertError from '../Form/Alertas/AlertError';

const LoginPasswordLost = () => {
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);

    const handleAlertSucess = () => setShowAlert(!showAlert);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);
        setTimeout(function () { setShowAlert(true) }, 1000);
        setTimeout(function () { setLoading(false) }, 1100);
    }

    return (
        <div class="container animeLeft">
            <div className="row">
                <div className="col-2"> </div>
                <div className="col-10">
                    <h1 className="mt-2 login title" >Esqueceu a senha?</h1>
                    {showAlert && <AlertSucess texto='Email Enviado com Sucesso ! ' lg='8' show={showAlert} onClick={() => setShowAlert(false)}>Email Enviado com Sucesso !</AlertSucess>}
                    <AlertError>Erro no Envio do Email !</AlertError>

                    <Form onSubmit={handleSubmit(onSubmit)} className="mt-4 ">
                        <Form.Row>
                            <Input lg="10" label='Email' name='email' size='lg' register={register({ required: true })} value={email} type='email' placeholder="Seu email" textoErro={errors.email && "Campo email é obrigatório"} onChange={(event) => setEmail(event.target.value)}></Input>
                        </Form.Row>

                        {loading ? (<Button disabled className="col-lg-2 " variant="primary" type="submit"> Carregando...</Button>)
                            : (<Button className="col-lg-2 " variant="primary" type="submit"> Enviar Email </Button>)}
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPasswordLost;
