import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createType } from '../../actions/types';
import { Link } from 'react-router';

class TypesNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createType(props)
      .then(() => {
        this.context.router.push('/types');
      });
  }

  render() {
    const { fields: { reference, type }, handleSubmit } = this.props;

    return (
      <div>
        <div className='page-header'>
          <h2>New Type</h2>
          <nav className='pull-right'>
            <Link to='/types' className='btn btn-link'>
              Back to Types
            </Link>
          </nav>
        </div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div
            className={
              `form-group
              ${ reference.touched &&
                 reference.invalid ? 'has-error' : '' }`}>
            <input
              type='text'
              className='form-control'
              placeholder='Reference'
              {...reference} />
              <div className='help-block'>
                { reference.touched ? reference.error : '' }
              </div>
          </div>
          <div
            className={
              `form-group
              ${ type.touched &&
                 type.invalid ? 'has-error' : '' }`}>
            <input
              type='text'
              className='form-control'
              placeholder='Type'
              {...type} />
            <div className='help-block'>
              { type.touched ? type.error : '' }
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Create Type
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.reference) {
    errors.reference = 'Enter a reference';
  }

  if (!values.type) {
    errors.type = 'Enter a type';
  }

  return errors;
}

export default reduxForm({
  form: 'TypesNewForm',
  fields: ['reference', 'type'],
  validate
}, null, { createType })(TypesNew);
