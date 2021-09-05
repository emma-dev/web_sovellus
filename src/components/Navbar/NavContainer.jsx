import React from 'react';
import {connect} from 'react-redux';
import {logout } from '../../redux/auth-reducer';
import Nav from './Nav';

class NavContainer extends React.Component{

    render() {
        return <Nav {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:  state.auth.login

});

export default connect(mapStateToProps, {logout}) (NavContainer);