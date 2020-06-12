import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from '../image/five-family-buddha.png';

const Styles = styled.div`
.jumbo{ 
    background: url(${image}) no-repeat fixed top;
    background-size: contain;
    color: #ccc;
    height: 300px;
    width: 100%
    position: realitive;
    z-index: 0;
}
.overlay {
    background-color: black;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}

`;



export const Jumbotron = () => (

            <Styles>
                <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                </Jumbo>
            </Styles>
        )
 



