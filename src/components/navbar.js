import React from 'react';
import {Container, Navbar, Dropdown, DropdownButton} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.scss';

export default class navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <Navbar fixed="top" id="navbar">
                <Container>
                    <img id="logo" src="https://i.imgur.com/GFKk2ED.png" className="d-inline-block align-top" alt="logo"/>
                    <Navbar.Brand href="#home">Fiorys-Shop
                        <span id="usuario-brand"></span>
                    </Navbar.Brand>
                        <DropdownButton title="Usuario" id="dropdown-button">
                            <Dropdown.Header id="dropdown-header">
                                <FontAwesomeIcon icon={faUserCircle}/>
                            </Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Cerrar sesión</Dropdown.Item>
                        </DropdownButton>
                </Container>
            </Navbar>
        );
    }
}
