import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

export default class Navigation extends Component {
  render() {
    return (
      <nav id='navigator' className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button'
                    className='navbar-toggle collapsed'
                    data-toggle='collapse'
                    data-target='#navbar'
                    aria-expanded='false'
                    aria-controls='navbar'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link to='/' className='navbar-brand'>Pokemon</Link>
          </div>
          <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/pokedexes'>Pokedex</Link></li>
              <li><Link to='/types'>Types</Link></li>
              <li id='logout'>
                <Link to='/'>
                  Lucas Anderson&nbsp;&nbsp;
                  <label className='glyphicon glyphicon-log-out' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
