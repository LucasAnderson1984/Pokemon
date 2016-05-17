import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Index from './components/index';
import Types from './components/types/types_index';
import TypesShow from './components/types/types_show';
import TypesNew from './components/types/types_new';
import TypesEdit from './components/types/types_edit';
import Pokedexes from './components/pokedexes/pokedexes_index';
import PokedexesShow from './components/pokedexes/pokedexes_show';
import PokedexesNew from './components/pokedexes/pokedexes_new';
import PokedexesEdit from './components/pokedexes/pokedexes_edit';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='types' component={Types} />
    <Route path='types/new' component={TypesNew} />
    <Route path='types/edit/:id' component={TypesEdit} />
    <Route path='types/:id' component={TypesShow} />
    <Route path='pokedexes' component={Pokedexes} />
    <Route path='pokedexes/new' component={PokedexesNew} />
    <Route path='pokedexes/edit/:id' component={PokedexesEdit} />
    <Route path='pokedexes/:id' component={PokedexesShow} />
  </Route>
);
