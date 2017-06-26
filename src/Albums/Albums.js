/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Albums.css';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidUpdate() {
    const URL = 'http://jsonplaceholder.typicode.com/albums?userId=' + this.props.user;
    fetch(URL).then(respuesta => respuesta.json())
      .then(datos => {
        var albumsArray = [];
        datos.forEach(album => {
          albumsArray.push(album.title);
        });
        this.setState({albums: albumsArray});
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
          <select id="albums" name="albums" onChange={this.props.onChange}>
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
