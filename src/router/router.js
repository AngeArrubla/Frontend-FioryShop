import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from '../components/login';
import PrivateRoute from '../components/auth/privateRoute';
import empleados from '../components/empleados.buscar';

export default function AppRouter(){
    return(
            <Switch>
                <Route exact path={["/", "/login"]} component={Login}/>
                <Route path="/empleados" component={empleados}/>
                <Route
                path={'*'}
                component={() => (
                    <h2 style={{marginTop:100}}>
                        404
                        <br />
                        PAGINA NO ENCONTRADA
                    </h2>
                )}
                />
            </Switch>
    );
}