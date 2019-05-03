import React, { Component } from 'react' 

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.loginBtnClick = this.loginBtnClickHandler.bind(this);
    }
    loginBtnClickHandler(){

    }
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <button onClick={this.loginBtnClick}>LOGIN </button>
            </React.Fragment>
        );
    }
}

export default Login;