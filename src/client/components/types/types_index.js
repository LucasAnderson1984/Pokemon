import React, { Component } from 'react';
import SearchBar from '../../containers/search_bar';
import TypeList from '../../containers/type_list';

export default class Types extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <TypeList />
      </div>
    );
  }
};
