import React from 'react'
import Acordeao from './Acordeao'


import { GiDiploma } from "react-icons/gi";
const HomeScreen = () => {
        return (
        <div className="container animeLeft grid grid-template-areas-2">
            <div className='diploma'><GiDiploma  className='diploma '></GiDiploma></div>

            <div class="sidenav">
                <Acordeao ></Acordeao>
            </div>

            <div className='initialTitle'>
                <p>Registro de Diplomas</p>
            </div>

        </div>
    )
}

export default HomeScreen
