import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { useStrict } from 'mobx';
import { enableLogging } from 'mobx-logger';

import { HomeComponent } from './components';

useStrict(true);

enableLogging({
  predicate: () => __DEV__ && Boolean(window.navigator.userAgent),
  action: true,
  reaction: false,
  compute: false
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={ HomeComponent } title="Home" initial={true} />
        </Scene>
      </Router>
    );
  }
}

