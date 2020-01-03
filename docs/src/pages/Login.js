import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';

class Login extends Component {

    render() {
        return (
            <Container>
                <form id="loginForm">
                    <h4>User Name</h4>
                    <Input/>
                    <h4>Password</h4>
                    <Input/>
                    <FormBtn>Submit</FormBtn>
                </form>
                <div id="register">Don't have an account? <a id="account" href="/newUser">Click Here</a> to create one.</div>
            </Container>
        );
    }
}

export default Login;