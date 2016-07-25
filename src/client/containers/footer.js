import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
            <p className="pull-left">Pokedex is &copy; 2016 Lucas Anderson</p>
        </div>
      </footer>
    );
  }
}
