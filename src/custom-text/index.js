'use strict';

import React, {
  Component,
} from 'react-native';

const { requireNativeComponent } = React;

class DecoratedTextLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <DecoratedTextLayout {...this.props} />
    );
  }
}


const DecoratedTextLayout = requireNativeComponent('DecoratedTextLayout', null);

module.exports = DecoratedTextLayout;