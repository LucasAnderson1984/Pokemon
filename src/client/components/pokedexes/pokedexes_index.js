import React, { Component } from 'react';
import SearchBar from '../../containers/search_bar';
import PokedexList from '../../containers/pokedex_list';

export default class Pokedexes extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <PokedexList />
      </div>
    );
  }
};
