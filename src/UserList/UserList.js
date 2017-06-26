/*jshint esversion: 6*/
import React, { Component } from 'react';
import './UserList.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.users = [];
  }

  componentWillMount() {
    const URL = 'http://jsonplaceholder.typicode.com/users';
    fetch(URL).then(respuesta => respuesta.json())
      .then(datos => {
        var usersArray = [];
        console.log("Tipo "+ usersArray);
        datos.forEach(user => {
          usersArray.push(user.name);
        });
        console.log(usersArray);
        this.setState({users: usersArray});

        //console.log("Usuario: " + this.state.users[0].name);
      })
      .catch((error) => console.log(error));
  }

  render() {

      return <p className="text-center">Cargando usuarios...</p>
    
  }

}

export default UserList;
