import React from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs'

export default function  CardCatalogue() {
    return (
        <Container style={{justifyContent: 'center', alignItems: 'center', display: 'block'}}>
            <h4 style={{textAlign: 'center', marginBottom: '20px', color: 'white'}}>Découvrez notre vaste catalogue</h4>
            <Form>
                <FormControl
                    type="search"
                    style={{textAlign: 'center', borderRadius: '25px'}}
                    className="mr-2"
                    aria-label="Search"
            />
            <BsSearch type="submit" size={25} style={{position: 'relative', bottom: '32px', left: '15px', color: '#7ACBCD'}}/>
            </Form>
        </Container>
    )
}