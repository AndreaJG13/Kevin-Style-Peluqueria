import React, { Component } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

export default class EditServicio extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.onChangeClient = this.onChangeClient.bind(this);
        this.onChangePro = this.onChangePro.bind(this);
        this.onChangeActivity = this.onChangeActivity.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cliente: '',
            profesional: '',
            actividad: ''
        }
    }

    componentDidMount() {

        
        const urlString = window.location.pathname;
        const division = urlString.split('/');
        const id = division[1];
        axios.get('http://localhost:5000/servicios/' + id)
            .then(response => {
                this.setState({
                    cliente: response.data.cliente,
                    profesional: response.data.profesional,
                    actividad: response.data.actividad
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        // axios.get('http://localhost:5000/users/')
        //   .then(response => {
        //     if (response.data.length > 0) {
        //       this.setState({
        //         users: response.data.map(user => user.username),
        //       })
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })

    }

    onChangeClient(e) {
        this.setState({
            cliente: e.target.value
        })
    }

    onChangePro(e) {
        this.setState({
            profesional: e.target.value
        })
    }

    onChangeActivity(e) {
        this.setState({
            actividad: e.target.value
        })
    }



    onSubmit(e) {
        e.preventDefault();

        const servicio = {
            cliente: this.state.cliente,
            profesional: this.state.profesional,
            actividad: this.state.actividad
        }

        console.log(servicio);

        const urlString = window.location.pathname;
        const division = urlString.split('/');
        const id = division[1];

        axios.post('http://localhost:5000/servicios/update/' + id, servicio)
            .then(res => console.log(res.data));

        window.location = '/servicios';
    }

    render() {
        return (
            <div>
                <h3>EDITAR SERVICIO</h3>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Cliente: </label>
                        <input type="text" className="form-control" value={this.state.cliente} onChange={this.onChangeClient} placeholder="Enter the new Client's name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Profesional: </label>
                        <input type="text" className="form-control" value={this.state.profesional} onChange={this.onChangePro} placeholder="Enter the new professional's name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Actividad: </label>
                        <input type="text" className="form-control" value={this.state.actividad} onChange={this.onChangeActivity} placeholder="Enter the new activity" />
                    </div>
                    <button type="submit" className="btn btn-primary text-center">Submit</button>
                </form>
            </div>
        )
    }
}