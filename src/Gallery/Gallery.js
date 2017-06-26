/*jshint esversion: 6*/
import React, { Component } from 'react';
import './Gallery.css';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
  }

  componentDidUpdate() {
    console.log("ALBUM"+ this.props.album);
    const URL = 'http://jsonplaceholder.typicode.com/photos?albumId=' + this.props.album;
    fetch(URL).then(respuesta => respuesta.json())
      .then(datos => {
        var picturesArray = [];
        datos.forEach(picture => {
          picturesArray.push([picture.title, picture.thumbnailUrl, picture.url]);
        });
        console.log(picturesArray);
        this.setState({pictures: picturesArray});
      })
      .catch((error) => console.log(error));
  }

  render() {
    let pictures = this.state.pictures;
    let albumsOptions = "";
    if (pictures.length > 0) {

      const picturesList = pictures.map((picture, i) => {
        return (
          <div className="picture" key={i}>
          <img src={picture[1]} alt={picture[0]} />
          </div>
        );
      });

      return (
        <div className="albumsList">
            { picturesList }
        </div>
      );
    } else {
      return <p className="text-center">Cargando Imagenes...</p>
    }
  }

}

export default Gallery;
