import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { showPokedex, updatePokedex } from '../../actions/pokedexes';
import { Link } from 'react-router';

class PokedexesEdit extends Component {
  static contextPokedexes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.showPokedex(this.props.params.id);
  }

  onSubmit(props) {
    this.props.updatePokedex(this.props.pokedex.id, props)
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
              placeholder='Nome'
              value={this.props.pokedex.name}
              {...name} />
          </div>
          <div className='form-group'>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Type'
              value={this.props.pokedex.type1_id}
              {...type1_id} />
          </div>
          <div className='form-group'>
            <input
              pokedex='text'
              className='form-control'
              placeholder='Type'
              value={this.props.pokedex.type2_id}
              {...type2_id} />
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
    errors.reference = 'Enter a national ID';
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
  return { pokedex: state.pokedexes.pokedex };
}

export default reduxForm({
  form: 'PokedexesEditForm',
  fields: ['reference', 'pokedex'],
  validate
}, mapStateToProps, { showPokedex, updatePokedex })(PokedexesEdit);
