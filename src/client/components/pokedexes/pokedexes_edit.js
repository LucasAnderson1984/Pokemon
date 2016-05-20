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
        this.context.router.push('/pokedexes');
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
          <h2>
            Edit Pokedex
            <nav className='pull-right'>
              <Link to='/pokedexes' className='btn btn-link'>
                Back to Pokedexes
              </Link>
            </nav>
          </h2>
        </div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className='form-group'>
            <input
              pokedex='text'
              className='form-control'
              placeholder='National ID'
              value={this.props.pokedex.national_id}
              {...national_id} />
          </div>
          <div className='form-group'>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Name'
              value={this.props.pokedex.name}
              {...name} />
          </div>
          <div
            className={
              `form-group
              ${ type1_id.touched &&
                 type1_id.invalid ? 'has-error' : '' }`}>
             <select
                className='form-control'
                name='type1_id'
                value={this.props.pokedex.type1_id}
                {...type1_id}>
                <option key='0' value='0'>-- Please pick a type --</option>
                {
                  this.props.types.map((type) => {
                    return(
                      <option key={type.id} value={type.id}>{type.type}</option>
                    );
                  })
                }
              </select>
            <div className='help-block'>
              { type1_id.touched ? type1_id.error : '' }
            </div>
          </div>
          <div
            className='form-group'>
             <select
                className='form-control'
                name='type2_id'
                value={ this.props.pokedex.type2_id }
                {...type2_id}>
                <option key='0' value='0'>-- Please pick a type --</option>
                {
                  this.props.types.map((type) => {
                    return(
                      <option key={type.id} value={type.id}>{type.type}</option>
                    );
                  })
                }
              </select>
          </div>
          <div className='form-group'>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Status'
              value={this.props.pokedex.status}
              {...status} />
          </div>

          <button pokedex='submit' className='btn btn-primary'>
            Update Pokedex
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.national_id) {
    errors.national_id = 'Enter a national ID';
  }

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.type1_id) {
    errors.type1_id = 'Enter a type';
  }

  if (!values.status) {
    errors.status = 'Enter a status';
  }

  return errors;
}

function mapStateToProps(state) {
  return { pokedex: state.pokedexes.pokedex, types: state.types.all };
}

export default reduxForm({
  form: 'PokedexesEditForm',
  fields: ['national_id', 'name', 'type1_id', 'type2_id', 'status'],
  validate
}, mapStateToProps, { fetchTypes, showPokedex, updatePokedex })(PokedexesEdit);
