import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPokedex } from '../../actions/pokedexes';
import { Link } from 'react-router';

class PokedexesShow extends Component {
  componentWillMount() {
    this.props.showPokedex(this.props.params.id);
  }

  render() {
    const edit = `/pokedexes/edit/${this.props.pokedex.id}`;
    var type1 = (this.props.pokedex.type1 != null) ?
                  this.props.pokedex.type1.type : '';

    var type2 = (this.props.pokedex.type2 != null) ?
                  this.props.pokedex.type2.type : '';

    return (
      <div>
        <div className='page-header'>
          <h2>
            {this.props.pokedex.name}
            <nav className='pull-right'>
              <Link to={edit} className='btn btn-link'>
                Edit
              </Link>
              <Link to='/pokedexes' className='btn btn-link'>
                Back to Pokedexes
              </Link>
            </nav>
          </h2>
        </div>
        <div className='form form-horizontal'>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>ID</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.id}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>UUID</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.uuid}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>National ID</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.national_id}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Type 1</label>
            <p className='col-sm-6 form-control-static'>
              {type1}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Type 2</label>
            <p className='col-sm-6 form-control-static'>
              {type2}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Status</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.status}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Created By</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.created_by}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Created Date</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.created_at}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Updated By</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.updated_by}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Updated Date</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.pokedex.updated_at}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { pokedex: state.pokedexes.pokedex };
}

export default connect(mapStateToProps, { showPokedex })(PokedexesShow);
