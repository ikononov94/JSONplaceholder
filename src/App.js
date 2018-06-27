import React from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';

import Users from './containers/Users'

const App = () => (
    <Switch>
        <Route path="/users" component={() => <Users />} />
    </Switch>
);

export default withRouter(App);