import React, { Component } from 'react';
import axios from 'axios';

import Carro from './carro-de-compras';

export default class Servicios extends Component {

    constructor(props) {
        super(props);

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

        axios.post('http://localhost:5000/servicios/add', servicio)
            .then(res => console.log(res.data));

        this.setState({
            cliente: '',
            profesional: '',
            actividad: ''
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <h1 className='diplay-1'>SERVICIOS</h1>
                    <div className='border border-secondary rounded'>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Cliente</label>
                                <input type="text" className="form-control" value={this.state.cliente} onChange={this.onChangeClient} aria-describedby="emailHelp" placeholder="Your name" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Profesional</label>
                                <input type="text" className="form-control" value={this.state.profesional} onChange={this.onChangePro} placeholder="Professional" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Actividad</label>
                                <input type="text" className="form-control" value={this.state.actividad} onChange={this.onChangeActivity} placeholder="Activity" />
                            </div>
                            <button type="submit" className="btn btn-primary">Comprar</button>
                        </form>
                    </div>
                </div>

                <div className='container'>
                    <h1 className='diplay-1'>CARRO DE COMPRAS</h1>
                    <Carro />
                </div>

            </div>
        );
    }
}