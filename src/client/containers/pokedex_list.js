import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPokedexes, destroyPokedex } from '../actions/pokedexes';
import { Link } from 'react-router';
import SearchBar from './search_bar';

class PokedexList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPokedexes();
  }

  onDeleteClick(button) {
    if (confirm('Are you sure?'))
      this.props.destroyPokedex(button.target.id)
        .then(() => {
          this.context.router.push('/pokedexes');
        });
  }

  renderPokedex(pokedex) {
    return (
      <tr key={pokedex.id}>
        <td>{pokedex.national_id}</td>
        <td>{pokedex.name}</td>
        <td>{pokedex.type1.type}</td>
        <td>{(pokedex.type2 != null) ? pokedex.type2.type : ''}</td>
        <td>{pokedex.status}</td>
        <td>
          <nav>
            <Link
              to={ `pokedexes/${pokedex.id}` }
              className='btn btn-default btn-sm glyphicon glyphicon-eye-open' />
            <Link
              to={ `pokedexes/edit/${pokedex.id}` }
              className='btn btn-default btn-sm glyphicon glyphicon-pencil' />
            <button
              id={ pokedex.id }
              onClick={ this.onDeleteClick.bind(this) }
              className='btn btn-danger btn-sm glyphicon glyphicon-trash' />
          </nav>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <h2>Pokedex</h2>
          <p></p>
          <nav className='pull-right'>
            <Link to='/pokedexes/new' className='btn btn-link'>
              New Pokemon
            </Link>
          </nav>
        </div>
        <SearchBar />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>National ID</th>
              <th>Name</th>
              <th>Type 1</th>
              <th>Type 2</th>
              <th>Status</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            { this.props.pokedexes.map((pokedex) => this.renderPokedex(pokedex)) }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pokedexes: state.pokedexes.all };
}

export default connect(mapStateToProps, { fetchPokedexes, destroyPokedex })(PokedexList);
