import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { showType, updateType } from '../../actions/types';
import { Link } from 'react-router';

class TypesEdit extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.showType(this.props.params.id);
  }

  onSubmit(props) {
    this.props.updateType(this.props.type.id, props)
      .then(() => {
        this.context.router.push('/types');
      });
  }

  render() {
    const { fields: { reference, type }, handleSubmit } = this.props;

    return (
      <div>
        <div className='page-header'>
          <h2>Edit Type</h2>
          <nav className='pull-right'>
            <Link to='/types' className='btn btn-link'>
              Back to Types
            </Link>
          </nav>
        </div>
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Reference'
              value={this.props.type.reference}
              {...reference} />
          </div>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Type'
              value={this.props.type.type}
              {...type} />
          </div>

          <button type='submit' className='btn btn-primary'>
            Update Type
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { type: state.types.type };
}

export default reduxForm({
  form: 'TypesEditForm',
  fields: ['reference', 'type']
}, mapStateToProps, { showType, updateType })(TypesEdit);
