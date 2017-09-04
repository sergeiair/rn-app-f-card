import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import coreStyles from '../../../core-styles/styles';

class FishItemComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {fishData} = this.props;

    return (
      <View style={coreStyles.main}>
        <Text>Fish name: {fishData.fish.name}</Text>
      </View>
    );
  }
}

FishItemComponent.propTypes = {
  fishData: PropTypes.object.isRequired,
};

export default FishItemComponent;