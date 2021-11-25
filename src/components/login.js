import React from 'react';//imr trae el import
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';//la importa al poner container
import {APIHOST as host} from '../components/app.json'
import './styles/login.scss';
import {isNull} from 'util';
import Cookies from 'universal-cookie';
import {calcularExpiracionSesion} from './helper/helper';
import Loading from'../components/loading';

const cookies = new Cookies();

export default class login extends React.Component { //ccc clase con constructor
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass:'',
        };
    }
    iniciarSesion(){

        this.setState({ loading: true});

        axios.post(`${host}/usuarios/login`,{
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) => {
            if(isNull(response.data.token)){
                alert('Usuario y/o contraseña invalida');
            }else{
                cookies.set('_s',response.data.token, {
                    path: '/',
                    expires: calcularExpiracionSesion(),
                });
                console.log(response.data.token)
                this.props.history.push('/empleados');
            }
            this.setState({loading:false});
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false});
        });
    }
    render() {
        return (
            <Container id="container-login">
                <Loading show={this.state.loading}/>
                <h2>Iniciar sesión</h2>
                <Form id="container-form">
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
                        onClick ={ () =>{
                            this.iniciarSesion();
                        }}
                        >
                        Iniciar Sesión
                    </Button>
                </Form>
            </Container>
        );
    }
}
