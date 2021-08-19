import React from 'react';
import NavBar from '../NavBar/NavBar';
import Heading from '../Heading/Heading';
import ContentRow2 from '../ContentRow2/ContentRow2';
import ContentRowStatistics from '../ContentRowStatistics/ContentRowStatistics';
import Personajes from '../Personajes/Personajes';
import './styles.css';
import pj1 from '../../assets/img/characters/ahsoka.jpg';
import pj2 from '../../assets/img/characters/anakin.jpg';
import pj3 from '../../assets/img/characters/batman.jpg';
import pj4 from '../../assets/img/characters/capAmerica.jpg';
import pj5 from '../../assets/img/characters/cell.jpg';
import pj6 from '../../assets/img/characters/hulkSmall.jpg';
import pj7 from '../../assets/img/characters/kyloRen.jpg';
import pj8 from '../../assets/img/characters/luke.jpg';


export default function Content() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <NavBar />
            <div className="container-fluid">
                <Heading />
                <ContentRowStatistics />
                <ContentRow2 />
                <div className="personajesContainer">
                    
                </div>
            </div>
        </div>
    )
}