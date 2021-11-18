import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { getSession} from '../helper/helper';

const checkAuth = ()=>{
    return !getSession() ? false : true;
};

export default class PrivateRoute extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            auth: false
        }
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.setState({
            auth: checkAuth() && !this.state.auth
        })
    }

    render(){
        const {component, path, ...rest} = this.props;

        return (
            this.state.auth
                ? <Route
                    path={path}
                    component={component}
                />
                : <Redirect
                    to={'/forbbiden'}
                />
        );
    }
}