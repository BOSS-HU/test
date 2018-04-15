import React from 'react'
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true
        }
        // this.handleLogoutClick = this.handleLogoutClick.bind(this)
        this.handleLoginClick = this.handleLoginClick.bind(this)
    }

    handleLogoutClick() {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }

    handleLoginClick() {
        this.setState((prevState) => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null
        if (isLoggedIn) {
            button = <button onClick={(e)=>this.handleLogoutClick(e)}>Loginout</button>
        } else {
            button = <button onClick={this.handleLoginClick}>Login</button>
        }
        return (
            <p>
                {button}
                <span>现在是:{this.state.isLoggedIn ? 'login状态' : 'loginOut状态'}</span>
            </p>
        )
    }
}
export default LoginControl