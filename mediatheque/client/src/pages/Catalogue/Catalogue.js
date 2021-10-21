import React from 'react';
import { Container, Row, Col, Form, FormControl, Card} from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs'

import Kids from '../../components/images/Kids.jpeg'
import Romans from '../../components/images/Romans.jpeg'
import Documentaires from '../../components/images/Documentaires.jpeg'
import Bandes from '../../components/images/Bandes.jpeg'

export default function Catalogue () {
    return (
        <div className="Body">
            <Container fluid className="Catalogue-Container">
                <Row>
                    <Col xs={12}>
                        <Form style={{marginBottom: '20px'}}>
                            <FormControl
                                type="search"
                                style={{textAlign: 'center', borderRadius: '25px', border: 'solid 2px black'}}
                                className="mr-2"
                                aria-label="Search"
                                placeholder="Chercher un livre"
                            />
                            <BsSearch type="submit" size={25} style={{position: 'relative', bottom: '34px', left: '15px', color: '#7ACBCD'}}/>
                        </Form>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="Mp-0">
                        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="Mp-0">
                            <Col xs={6} sm={6} md={6} lg={6} className="Mp-0">
                                <Card className="Img-overlay">
                                    <Card.Img src={Kids} alt="Card image" className="Catalogue-Img" />
                                    <Card.ImgOverlay className="Mp-0 Center">
                                        <Card.Title className="Catalogue-Titles" style={{color: 'white', fontSize: '32px'}}>Enfants</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col className="Catalogue-In" xs={6} sm={6} md={6} lg={6}><h4 className="Mp-0 Bolder">ALBUMS POUR ENFANTS</h4></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="Mp-0">
                        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="Mp-0">
                            <Col xs={6} sm={6} lg={6} className="Mp-0">
                                <Card className="Img-overlay">
                                    <Card.Img src={Romans} alt="Card image" className="Catalogue-Img" />
                                    <Card.ImgOverlay className="Mp-0 Center">
                                        <Card.Title className="Catalogue-Titles"  style={{color: 'white', fontSize: '32px'}}>Adults</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                            <Col className="Catalogue-In" xs={6} sm={6}><h4 className="Mp-0 Bolder">ROMANS POUR ADULTES</h4></Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                <Col xs={12} sm={12} md={6} className="Mp-0">
                        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="Mp-0">
                            <Col className="Catalogue-In" xs={6} sm={6} md={6} lg={6}><h4 className="Mp-0 Bolder">BANDES DESSINEES</h4></Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="Mp-0">
                                <Card className="Img-overlay">
                                    <Card.Img src={Documentaires} alt="Card image" className="Catalogue-Img" />
                                    <Card.ImgOverlay className="Mp-0 Center">
                                        <Card.Title className="Catalogue-Titles"  style={{color: 'white', fontSize: '32px'}}>Bandes</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={6} className="Mp-0">
                        <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="Mp-0">
                            <Col className="Catalogue-In" xs={6} sm={6} md={6} lg={6}><h4 className="Mp-0 Bolder">DOCU<span className="Docu-xl"></span>MENTAIRES</h4></Col>
                            <Col xs={6} sm={6} md={6} lg={6} className="Mp-0">
                                <Card className="Img-overlay">
                                    <Card.Img src={Bandes} alt="Card image" className="Catalogue-Img" />
                                    <Card.ImgOverlay className="Mp-0 Center">
                                        <Card.Title className="Catalogue-Titles Docu"  style={{color: 'white', fontSize: '26px'}}>Documentaires</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}