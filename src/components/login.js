import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      correo: '',
      password: ''
    }
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
      correo: this.state.correo,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/login', user)
      .then(res => console.log(res.data));

    this.setState({
        correo: '',
        password: ''
    })


    
  }

  render() {
    return (
      <div>
        <p>LOGIN</p>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" value={this.state.correo} onChange={this.onChangeEmail} aria-describedby="emailHelp" placeholder="email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} placeholder="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link to="/register">¿No tienes cuenta? ¡REGISTRATE AQUI!</Link>

      </div>
    );
  }
}