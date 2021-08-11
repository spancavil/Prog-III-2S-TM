import React from 'react';
import NavBar from '../NavBar/NavBar';
import Heading from '../Heading/Heading';
import ContentRow2 from '../ContentRow2/ContentRow2';
import ContentRowStatistics from '../ContentRowStatistics/ContentRowStatistics';

export default function Content(){
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <NavBar/>
            <div className="container-fluid">
                <Heading/>
                <ContentRowStatistics/>
                <ContentRow2/>
            </div>
        </div>
    )
}