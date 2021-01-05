import React from 'react'
import { Link } from 'react-router-dom'
import usuario from '../assets/usuario.svg';
import Button from 'react-bootstrap/Button';
// import Accordion from 'react-bootstrap/Accordion'
import { FaUser } from "react-icons/fa";
// import {UserContext} from './UserContext'
// import context from 'react-bootstrap/esm/AccordionContext';


const Header = () => {
//  const {data} = React.useContext(UserContext);
 console.log(usuario);
  return (

    <header className="mt-4 ">
      <nav  className="mt-2 mr-5 nav justify-content-end">
  <Link className=" mr-3 mb-5 mt-2 linkLogin " to="/login">Login / Criar</Link> 
  <FaUser className='user mr-5 mt-2 ' alt="Usuario"></FaUser>
 
      </nav>
    </header>
  )
}

export default Header
