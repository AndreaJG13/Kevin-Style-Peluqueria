import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Servicio = props => (
  <tr>
    <td>{props.servicio.cliente}</td>
    <td>{props.servicio.profesional}</td>
    <td>{props.servicio.actividad}</td>
    <td>
      <Link to={"/editarServicio/"+props.servicio._id}>edit</Link> | <a href="#" onClick={() => { props.deleteServicio(props.servicio._id) }}>delete</a>
    </td>
  </tr>
)


export default class Carro extends Component {

  constructor(props) {
    super(props);

    this.deleteServicio = this.deleteServicio.bind(this)

    this.state = {servicios: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/servicios')
      .then(response => {
        this.setState({ servicios: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteServicio(id) {
    axios.delete('http://localhost:5000/servicios/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      servicios: this.state.servicios.filter(el => el._id !== id)
    })
  }

  ServicioList() {
    return this.state.servicios.map(currentservicio => {
      return <Servicio servicio={currentservicio} deleteServicio={this.deleteServicio} key={currentservicio._id}/>;
    })
  }
  

  render() {
    return (
      <div className='border border-secondary rounded'>
        <h3>CARRO DE COMPRAS</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>CLIENTE</th>
              <th>PROFESIONAL</th>
              <th>ACTIVIDAD</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            { this.ServicioList() }
          </tbody>
        </table>
      </div>
    );
  }
}

