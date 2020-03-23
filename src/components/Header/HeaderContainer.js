import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOutUser } from '../../redux/authReducer';


class HeaderContainer extends Component {

    render() {
        return <Header auth={this.props.auth}
            logOutUser={this.props.logOutUser} />
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}



export default connect(mapStateToProps, { logOutUser })(HeaderContainer);