import React, { Component } from "react";
import Header from "./header";

const SignIn = () => {
    return <div className="form-container signup">
        <form action="" method="post">
            <h2 className="form-title">Sign Up</h2>
            <input id="sign-email" type="email" name="email" placeholder="Email"/>
            <input id="sign-password" type="password" name="sign-password" placeholder="Password"/>
            <input id="conf-password" type="password" name="conf-password" placeholder="Confirm Password"/>
            <button type="submit">Create Account</button>
            <h4 className="warning">Already have an account? please <span id="a-login-in">login</span> instead.</h4>
        </form>
    </div>
}

const LogIn = () => {
    return <div className="form-container login">
        <form action="" method="post">
            <h2 className="form-title">Login</h2>
            <input id="sign-email" type="email" name="email" placeholder="Email"/>
            <input id="sign-password" type="password" name="sign-password" placeholder="Password"/>
            <button type="submit">Login</button>
            <h4 className="warning">Dont have an account? please <span id="a-login-in">sign up</span>first.</h4>
        </form>
    </div>
}

export default class SignLog extends Component {

    render() {
        return <div className="sign-up-in">
            <div className="form-parent">
                <Header />
                <SignIn />
                <LogIn />
            </div>
        </div>
    }
}