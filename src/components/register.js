import React, { Component } from 'react';
import axios from 'axios'; //Conectar el backend con el frontend

export default class Register extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          nombre: '',
          correo: '',
          password: ''
        }
      }
    
      onChangeUsername(e) {
        this.setState({
          nombre: e.target.value
        })
      }

      onChangeEmail(e) {
        this.setState({
          correo: e.target.value
        })
      }

      onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const user = {
          nombre: this.state.nombre,
          correo: this.state.correo,
          password: this.state.password
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
          .then(res => console.log(res.data));
    
        this.setState({
            nombre: '',
            correo: '',
            password: ''
        })

        window.location = '/servicios';
      }

    render() {
        return (
            <div>
                <h1 className='diplay-1'>REGISTRO</h1>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" value={this.state.nombre} onChange={this.onChangeUsername} placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" value={this.state.correo} onChange={this.onChangeEmail} placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} placeholder="Password" />
                    </div>
                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                </form>
            </div>
        );
    }
}