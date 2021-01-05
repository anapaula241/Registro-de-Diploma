import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {UserStorage} from './componentes/UserContext'
import './App.css';
import Header from './componentes/Header'
import Home from './componentes/Home'
import Login from './componentes/Login/Login'
import Card from 'react-bootstrap/Card';
import './App.css';
import Diplomas from './componentes/Consultas/Diplomas';
import LivroRegistro from './componentes/Operacoes/LivroRegistro';
import Diploma from './componentes/Cadastros/Diploma';
import IncluirCadastroDiploma from './componentes/Cadastros/IncluirCadastroDiploma';
import DiplomaVisualizar from './componentes/Consultas/DiplomaVisualizar';
import LoginCreate from './componentes/Login/LoginCreate';
import ManutencaoDiploma from './componentes/Ferramentas/ManutencaoDiploma';
import ManutencaoDiplomaAlterar from './componentes/Ferramentas/ManutencaoDiplomaAlterar';
import HomeScreen from './componentes/HomeScreen';

const App = () => {
  return (
    <Card className="card mt-5 mb-5" style={{
      width: '74rem', margin: 'auto', borderWidth: '20px',
      borderColor: "#3c6178", backgroundColor: '#eee'
    }}>
      <Card.Body >
        <BrowserRouter>
        {/* <UserStorage> */}
          <Header></Header>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login/*" element={<Login></Login>} />
            <Route path="/cadastro/diploma" element={<Diploma></Diploma>} />
            <Route path="/consulta/diplomas" element={<Diplomas></Diplomas>} />
            <Route path="/consulta/diplomas/visualizar" element={<DiplomaVisualizar></DiplomaVisualizar>} />
            <Route path="/ferramentas/manutencaoDiploma/alterar" element={<ManutencaoDiplomaAlterar></ManutencaoDiplomaAlterar>} />
            <Route path="/ferramentas/manutencaoDiploma" element={<ManutencaoDiploma></ManutencaoDiploma>} />
            <Route path="/operacoes/livroRegistro" element={<LivroRegistro></LivroRegistro>} />
            <Route path="/cadastro/incluirCadastroDiploma" element={<IncluirCadastroDiploma></IncluirCadastroDiploma>} />
            <Route path="/ferramentas/manutencaoDiploma" element={<ManutencaoDiploma></ManutencaoDiploma>} />
            <Route path="/login/telaPrincipal" element={<HomeScreen></HomeScreen>} />
          </Routes>
          {/* <Footer></Footer> */}
          {/* </UserStorage> */}
        </BrowserRouter>
      </Card.Body>
    </Card  >
  )
}

export default App
