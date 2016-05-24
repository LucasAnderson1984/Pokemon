import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { queryPokedex } from '../actions/pokedexes';

class PokedexSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.queryPokedex(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form id='searchBar' onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get pokedex list"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ queryPokedex }, dispatch);
}

export default connect(null, mapDispatchToProps)(PokedexSearchBar);
