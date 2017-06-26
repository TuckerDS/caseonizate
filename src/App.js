import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList/UserList';
import Albums from './Albums/Albums';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {user: 0};

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserList
          onChange={this.userChange}
        />

        <Albums
          user={this.state.user}
        />
      </div>
    );
  }

  userChange = (e) => {
    console.log(e.target.value);
    this.setState({user: e.target.value});
  }

}


export default App;
