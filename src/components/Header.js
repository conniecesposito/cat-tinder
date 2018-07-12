import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div>

        <h1> {this.props.id[0].name} </h1>

        </div>
    );
  }
}

export default Header;
