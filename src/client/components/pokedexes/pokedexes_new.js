import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPokedex } from '../../actions/pokedexes';
import { Link } from 'react-router';

class PokedexesNew extends Component {
  static contextPokedexes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPokedex(props)
      .then(() => {
        this.context.router.push('/pokedexes');
      });
  }

  render() {
    const { fields: { reference, pokedex }, handleSubmit } = this.props;

    return (
      <div>
        <div className='page-header'>
          <h2>
            New Pokedex
            <nav className='pull-right'>
              <Link to='/pokedexes' className='btn btn-link'>
                Back to Pokedexes
              </Link>
            </nav>
          </h2>
        </div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div
            className={
              `form-group
              ${ national_id.touched &&
                 national_id.invalid ? 'has-error' : '' }`}>
            <input
              pokedex='text'
              className='form-control'
              placeholder='National ID'
              {...national_id} />
              <div className='help-block'>
                { national_id.touched ? national_id.error : '' }
              </div>
          </div>
          <div
            className={
              `form-group
              ${ name.touched &&
                 name.invalid ? 'has-error' : '' }`}>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Name'
              {...name} />
            <div className='help-block'>
              { name.touched ? name.error : '' }
            </div>
          </div>
          <div
            className={
              `form-group
              ${ type1_id.touched &&
                 type1_id.invalid ? 'has-error' : '' }`}>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Type'
              {...type1_id} />
            <div className='help-block'>
              { type1_id.touched ? type1_id.error : '' }
            </div>
          </div>
          <div
            className={
              `form-group
              ${ status.touched &&
                 status.invalid ? 'has-error' : '' }`}>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Status'
              {...status} />
            <div className='help-block'>
              { status.touched ? status.error : '' }
            </div>
          </div>

          <button pokedex='submit' className='btn btn-primary'>
            Create Pokedex
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

export default reduxForm({
  form: 'PokedexesNewForm',
  fields: ['reference', 'pokedex'],
  validate
}, null, { createPokedex })(PokedexesNew);
