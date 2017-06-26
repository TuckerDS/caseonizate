/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Albums.css';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
    console.log(this.props);
    //this.a = [];
  }

  componentWillUpdate() {
    let userID = 1;
    const URL = 'http://jsonplaceholder.typicode.com/albums?userId=' + this.props.user;
    fetch(URL).then(respuesta => respuesta.json())
      .then(datos => {
        var albumsArray = [];
        datos.forEach(album => {
          albumsArray.push(album.title);
        });
        console.log(albumsArray);
        this.setState({albums: albumsArray});

        //console.log("Usuario: " + this.state.users[0].name);
      })
      .catch((error) => console.log(error));
  }

  render() {
    let albums = this.state.albums;
    let albumsOptions = "";
    if (albums.length > 0) {

      const userOptions = albums.map((album, i) => {
        return(
          <option key={i+1} value={i}>{album}</option>
        );
      });

      return (
        <div className="albumsList">
          <select id="albums" name="albums">
          <option key={0} value="0" defaultValue>Select an option</option>
            { userOptions }
          </select>
        </div>
      );
    } else {
      return <p className="text-center">Cargando Galerias...</p>
    }
  }

}

export default Albums;
