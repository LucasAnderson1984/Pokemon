import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showType } from '../../actions/types';
import { Link } from 'react-router';

class TypesShow extends Component {
  componentWillMount() {
    this.props.showType(this.props.params.id);
  }

  render() {
    const edit = `/types/edit/${this.props.type.id}`;

    return (
      <div>
        <div className='page-header'>
          <h2>
            {this.props.type.type}
            <nav className='pull-right'>
              <Link to={edit} className='btn btn-link'>
                Edit
              </Link>
              <Link to='/types' className='btn btn-link'>
                Back to Types
              </Link>
            </nav>
          </h2>
        </div>
        <div className='form form-horizontal'>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>ID</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.id}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>UUID</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.uuid}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Reference</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.reference}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Created By</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.created_by}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Created Date</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.created_at}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Updated By</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.updated_by}
            </p>
          </div>
          <div className='form-group'>
            <label className='col-sm-3 control-label'>Updated Date</label>
            <p className='col-sm-6 form-control-static'>
              {this.props.type.updated_at}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { type: state.types.type };
}

export default connect(mapStateToProps, { showType })(TypesShow);
