import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import LoginView              from 'views/LoginView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path="/login" component={LoginView}/>
  </Route>
);
