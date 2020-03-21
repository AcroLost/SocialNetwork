import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {

            if (this.props.isAuth) {
                return <Component {...this.props} />
            }
            return <Redirect to='/login' />
        }
    }

    const ConnectedAuthRedirect = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirect;
}