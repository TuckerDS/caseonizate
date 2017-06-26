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
    let users = this.state.users;
    let userOptions = "";
    if (users.length > 0) {

      const userOptions = users.map((user, i) => {
        return(
          <option key={i+1} value={i+1}>{user}</option>
        );
      });

      return (
        <div className="userList">
          <select id="users" name="users" onChange={this.props.onChange}>
          <option key={0} value="0" defaultValue>Select an option</option>
            { userOptions }
          </select>
        </div>
      );
    } else {
      return <p className="text-center">Cargando usuarios...</p>
    }
  }

}

export default UserList;
