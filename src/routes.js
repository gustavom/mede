import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Panel from './pages/Panel';

export default function Routes({ isHome, confirmIndex }) {
  return (
    <Switch>
      <Route path="/" exact render={() => <Home navIsHome={confirmIndex} />} />
      <Route path="/panel" render={() => <Panel navIsHome={isHome} />} />
    </Switch>
  );
}
