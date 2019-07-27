import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Panel from './pages/Panel';

export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/panel" component={Panel} />
    </Switch>
  )
}
