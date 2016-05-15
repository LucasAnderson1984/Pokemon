import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Index from './components/index';
import Types from './components/types/types_index';
import TypesShow from './components/types/types_show';
import TypesNew from './components/types/types_new';
import TypesEdit from './components/types/types_edit';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path='types' component={Types} />
    <Route path='types/new' component={TypesNew} />
    <Route path='types/edit/:id' component={TypesEdit} />
    <Route path='types/:id' component={TypesShow} />
  </Route>
);
