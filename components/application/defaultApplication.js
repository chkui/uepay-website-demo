import React from 'react'
import PropTypes from 'prop-types';
import PageLoading from '../loading/pageLoading'

const LoginStatus = {
    Check: 1,
    Login: 2,
    Logout: 3
};

/**
 * @param props
 * @param props.Component {React.Component} 当前页面
 */
class DefaultApplication extends React.Component {

    state = {login: LoginStatus.Check};

    componentDidMount() {
        const _this = this;
        setTimeout(()=>{_this.setState({login:LoginStatus.Login})}, 2000)
    }

    render() {
        const {Component} = this.props,
            {login} = this.state;
        switch (login){
            case LoginStatus.Check:
                return (<PageLoading/>);
            case LoginStatus.Logout:
                return (<div>未登陆</div>);
            case LoginStatus.Login:
                return <Component/>
        }
    }
}

DefaultApplication.propTypes = {
    Component: PropTypes.element
};

export default DefaultApplication