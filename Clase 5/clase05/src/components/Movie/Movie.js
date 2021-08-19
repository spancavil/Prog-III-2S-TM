import React from 'react';
import './styles.css';

export default function Movie(props){
    return(
        <React.Fragment>
            <h2 className="titulo"> {props.title} </h2>
            <h2 className="genero"> {props.genre} </h2>
        </React.Fragment>
    )
}