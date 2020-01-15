import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
           
    };
        

    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({
            name: event.target.value,
            
            
        });
    };

    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event){
        alert(this.state.name)
        alert(this.state.password)
        event.preventDefault();
        
        
    };
  

    render() {

        return (
            <Container>
                <form id="loginForm" onSubmit ={this.handleSubmit}>
                    <h4>User Name</h4>
                    <Input type ='text' value ={this.state.name} onChange={this.handleChange}></Input>
                    <h4>Password</h4>
                    <Input type = 'text' value ={this.state.password} onChange ={this.handlePassword}></Input>
                    <FormBtn>Submit</FormBtn>
                </form>
                <div id="register">Don't have an account? <a id="account" href="/newUser">Click Here</a> to create one.</div>              
            </Container>   
            
        );
    }

}

export default Login;