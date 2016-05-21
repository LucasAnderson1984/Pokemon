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
          <h2>New Pokemon</h2>
          <nav className='pull-right'>
            <Link to='/pokedexes' className='btn btn-link'>
              Back to Pokedex
            </Link>
          </nav>
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
             <select className='form-control' name='type1_id' {...type1_id}>
                <option key='0' value='0'>-- Please pick a type --</option>
                {
                  this.props.types.map((type) => {
                    return(<option key={type.id} value={type.id}>{type.type}</option>);
                  })
                }
              </select>
            <div className='help-block'>
              { type1_id.touched ? type1_id.error : '' }
            </div>
          </div>
          <div
            className='form-group'>
             <select className='form-control' name='type2_id' {...type2_id}>
                <option key='0' value='0'>-- Please pick a type --</option>
                {
                  this.props.types.map((type) => {
                    return(<option key={type.id} value={type.id}>{type.type}</option>);
                  })
                }
              </select>
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
            Create Pokemon
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
  return { types: state.types.all };
}

export default reduxForm({
  form: 'PokedexesNewForm',
  fields: ['national_id', 'name', 'type1_id', 'type2_id', 'status'],
  validate
}, mapStateToProps, { fetchTypes, createPokedex })(PokedexesNew);
