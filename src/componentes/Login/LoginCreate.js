import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
    name: yup.string().required('Preencha o campo nome'),
    email: yup.string().email('Preencha o campo email com um email válido').required('Preencha o campo email'),
    password: yup.string().min(8, 'Sua senha deve ter no mínimo 8 caracteres').required('Preencha o campo senha'),
    teste: yup.string().min(8, 'Sua senha deve ter no mínimo 8 caracteres').required('Preencha o campo senha'),
});

const LoginCreate = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPasword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [show, setShow] = React.useState(true);
    const [showErro, setShowErro] = React.useState(true);
    const navigate = useNavigate();
    const handleComeBack = () => navigate('/login');
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div class="container animeLeft">
            <div className="row">
                <div className="col-2"> </div>
                <div className="col-10">
                    <h1 className="mt-2 login title" >Cadastre-se</h1>

                    {/* Alertas de sucesso e de erro - início */}
                    <Alert className="col-md-10 " show={show} variant="success" > <strong><h3>  Seu Cadastro foi realizado com Sucesso !</h3></strong><hr></hr><div className="d-flex justify-content-end ">
                        <Button onClick={() => setShow(false)} variant="outline-success"> Fechar </Button> </div>
                    </Alert>
                    <Alert className="col-md-10 " show={showErro} variant="danger"><strong><h3> Seu Cadastro não foi realizado ! </h3></strong><hr></hr><div className="d-flex justify-content-end ">
                        <Button onClick={() => setShowErro(false)} variant="outline-danger"> Fechar </Button> </div>
                    </Alert>
                    {/* Alertas de sucesso e de erro - fim */}

                    {/* Formulário - início  */}
                    <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 ">
                        <Form.Group >
                            <Form.Label>Nome</Form.Label>
                            <Form.Control value={name} size="lg" ref={register} name="name" className="col-md-10 " placeholder="Seu email" type="text" onChange={(event) => setName(event.target.value)} />
                            <Form.Text className='error' > <p>{errors.name?.message}</p> </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={email} size="lg" ref={register} name="email" className="col-md-10"
                                placeholder="Seu email" type="email" onChange={(event) => setEmail(event.target.value)} />
                            <Form.Text className='error' > <p>{errors.email?.message}</p> </Form.Text>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control value={password} size="lg" ref={register} name="password" className="col-md-10" placeholder="Sua senha" type="text" onChange={(event) => setPasword(event.target.value)} />
                            <Form.Text className='error' > <p>{errors.password?.message}</p> </Form.Text>
                        </Form.Group>

                        {loading ? (<Button disabled className="col-lg-2 mr-2 mt-3" variant="primary" type="submit"> Cadastrando...</Button>
                        ) : (<Button className="col-lg-2 mr-2 mt-3" variant="primary" type="submit"> Cadastrar </Button>)}
                        <Button className="col-lg-2 mt-3 " variant="secondary" onClick={handleComeBack} >Voltar</Button>
                    </Form>
                    {/* Formulário - fim  */}
                </div>
            </div>
        </div>
    );
};

export default LoginCreate;

