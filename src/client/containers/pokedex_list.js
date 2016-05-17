import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class PokedexList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPokedexes();
  }

  onDeleteClick(button) {
    if (confirm('Are you sure?'))
    this.props.destroyType(button.target.id)
    .then(() => {
      this.context.router.push('/pokedexes');
    });
  }

  renderType(pokedex) {
    return (
      <tr key={pokedex.id}>
      <td>{pokedex.national_id}</td>
      <td>{pokedex.name}</td>
      <td>{pokedex.type1_id}</td>
      <td>{pokedex.type2_id}</td>
      <td>{pokedex.status}</td>
      <td>
      <nav>
      <Link
      to={ `types/${pokedex.id}` }
      className='btn btn-default btn-sm glyphicon glyphicon-eye-open' />
      <Link
      to={ `types/edit/${pokedex.id}` }
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
          <h2>
            Pokedex
            <nav className='pull-right'>
              <Link to='/pokedexes/new' className='btn btn-link'>
                New Pokemon
              </Link>
            </nav>
          </h2>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Pokedex</th>
              <th>National ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Type</th>
              <th>Status</th>
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
import { fetchPokedexes, destroyPokedex } from '../actions/pokedexes';

export default connect(mapStateToProps, { fetchPokedexes, destroyPokedex })(PokedexList);
