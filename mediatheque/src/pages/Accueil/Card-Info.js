import React, {useState} from 'react';
import { Container, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CardInfo() {
    return (
        <Container className="Mp-0">
            <Container className="Info-Containers Mp-0">
                <h6 className="Titles-Info">Horaires d'overture</h6>
                <p className= "Paragraph-Info">
                    Lundi: 13h-17h <br/>
                    Mercredi: 9h-12h & 13h30-18h <br/>
                    Vendredi: 15h-18h <br/>
                    Samedi: 9h-12h <br/>& 13h30-17h
                </p>
            </Container>
            <Container className="Info-Containers Mp-0">
                <h6 className="Titles-Info">Contact</h6>
                <h6>La Chapelle-Curreaux</h6>
                <p className= "Paragraph-Info">
                    5 rue de la Médiathèque
                    29999 La Chapelle-Curreaux
                    07 12 12 12 12
                    chapelle@example.com
                </p>
            </Container>
            <Container className="Info-Containers Mp-0">
                <h6 className="Titles-Info">Avez-vous un compte?</h6>
                <p className= "Paragraph-Info">
                    Connectez-vous <br/>
                    ou <br/> créez
                    vote compte <Link to="/signin" style={{fontWeight: 'bold', color: 'inherit', textDecoration: 'none'}}>Ici</Link>
                </p>
            </Container>
        </Container>
    )
}