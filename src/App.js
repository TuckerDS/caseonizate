/*jshint esversion: 6*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList/UserList';
import Albums from './Albums/Albums';
import Gallery from './Gallery/Gallery';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {user: 0, album: 0};
  }

  render() {
    return (
      <div className="App">

        <UserList
          onChange={this.userChange}
        />

        <Albums
          user={this.state.user}
          onChange={this.albumChange}
        />

        <Gallery
          album={this.state.album}
        />

      </div>
    );
  }

  userChange = (e) => {
    this.setState({user: e.target.value});
  }

  albumChange = (e) => {
    console.log("album id: " + e.target.value);
    this.setState({album: e.target.value});
  }

}

export default App;
