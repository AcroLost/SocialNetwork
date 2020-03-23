import React, { Component } from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserData, logOutUser } from '../../redux/authReducer';


class HeaderContainer extends Component {

    componentDidMount() {
        this.props.setUserData()
    }

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



export default connect(mapStateToProps, { setUserData, logOutUser })(HeaderContainer);