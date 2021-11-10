import React from 'react';//imr trae el import
import { Form, Button, Col, Row, Container } from 'react-bootstrap';//la importa al poner container
import './login.css';

export default class login extends React.Component { //ccc clase con constructor
    constructor(props) {
        super(props);
        this.state = {
            usuarios: '',
            pass:'',
        };
    }
    iniciarSesion(){
        alert(`usuario:${this.state.usuario} - password:${this.state.pass}`)
    }
    render() {
        return (
            <Container id="login-container">
                <Row>
                    <Col>
                    <Row>
                        <h2>Iniciar sesión</h2>
                    </Row>
                    <Row>
                        <Col
                            sm="12"
                            xs="12"
                            md={{span:4, offset:4}}
                            lg={{span:4, offset:4}}
                            xl={{span:4, offset:4}}
                        >
                        <Form>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control
                                onChange={(e) =>
                                    this.setState({usuario:e.target.value})
                                }
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label >Contraseña</Form.Label>
                                <Form.Control
                                type="password"
                                onChange={(e) =>
                                    this.setState({pass:e.target.value})
                                }
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="password"
                                onClick ={ () =>{
                                    this.iniciarSesion();
                                }}
                                >
                                Iniciar Sesión
                            </Button>
                        </Form>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
