import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { showPokedex, updatePokedex } from '../../actions/pokedexes';
import { fetchTypes } from '../../actions/types';
import { Link } from 'react-router';

class PokedexesEdit extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.showPokedex(this.props.params.id);
    this.props.fetchTypes();
  }

  onSubmit(props) {
    this.props.updatePokedex(this.props.pokedex.id, props)
      .then(() => {
        this.context.router.push(`/pokedexes/${this.props.pokedex.id}`);
      });
  }

  render() {
    const {
      fields: {
        national_id,
        name,
        type1_id,
        type2_id,
        status
      },
      handleSubmit
    } = this.props;

    return (
      <div>
        <div className='page-header'>
          <h2>Edit Pokemon</h2>
          <nav className='pull-right'>
            <Link to='/pokedexes' className='btn btn-link'>
              Back to Pokedex
            </Link>
          </nav>
        </div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='National ID'
              value={this.props.pokedex.national_id}
              {...national_id} />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              value={this.props.pokedex.name}
              {...name} />
          </div>
          <div className='form-group'>
             <select
                className='form-control'
                name='type1_id'
                value={this.props.pokedex.type1_id}
                {...type1_id}>
                <option key='0' value=''>-- Please pick a type --</option>
                {
                  this.props.types.map((type) => {
                    return(
                      <option key={type.id} value={type.id}>{type.type}</option>
                    );
                  })
                }
              </select>
          </div>
          <div
            className='form-group'>
             <select
                className='form-control'
                name='type2_id'
                value={ this.props.pokedex.type2_id }
                {...type2_id}>
                <option key='0' value='0'>None</option>
                {
                  this.props.types.map((type) => {
                    return(
                      <option key={type.id} value={type.id}>{type.type}</option>
                    );
                  })
                }
              </select>
          </div>
          <div
            className='form-group'>
             <select
                className='form-control'
                name='status'
                value={ this.props.pokedex.status }
                {...status}>
                <option key='Not Caught' value='Not Caught'>Not Caught</option>
                <option key='Caught' value='Caught'>Caught</option>
              </select>
          </div>

          <button type='submit' className='btn btn-primary'>
            Update Pokemon
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pokedex: state.pokedexes.pokedex, types: state.types.all };
}

export default reduxForm({
  form: 'PokedexesEditForm',
  fields: ['national_id', 'name', 'type1_id', 'type2_id', 'status']
}, mapStateToProps, { fetchTypes, showPokedex, updatePokedex })(PokedexesEdit);
