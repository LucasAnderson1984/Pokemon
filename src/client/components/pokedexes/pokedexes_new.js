import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPokedex } from '../../actions/pokedexes';
import { fetchTypes } from '../../actions/types';
import { Link } from 'react-router';

class PokedexesNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchTypes();
  }

  onSubmit(props) {
    this.props.createPokedex(props)
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
              type='text'
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
              type='text'
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
              type='text'
              className='form-control'
              placeholder='Type 1'
              {...type1_id} />
            <div className='help-block'>
              { type1_id.touched ? type1_id.error : '' }
            </div>
          </div>
          <div
            className={
              `form-group
              ${ type2_id.touched &&
                 type2_id.invalid ? 'has-error' : '' }`}>
            <input
              type='text'
              className='form-control'
              placeholder='Type 2'
              {...type2_id} />
            <div className='help-block'>
              { type2_id.touched ? type2_id.error : '' }
            </div>
          </div>
          <div
            className={
              `form-group
              ${ status.touched &&
                 status.invalid ? 'has-error' : '' }`}>
            <input
              type='text'
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

  if (!values.type2_id) {
    errors.type2_id = 'Enter a type';
  }

  if (!values.status) {
    errors.status = 'Enter a status';
  }

  return errors;
}

function mapStateToProps(state) {
  return { types: state.types.all.map((a) => {return a.type}) };
}

export default reduxForm({
  form: 'PokedexesNewForm',
  fields: ['national_id', 'name', 'type1_id', 'type2_id', 'status'],
  validate
}, mapStateToProps, { fetchTypes, createPokedex })(PokedexesNew);
