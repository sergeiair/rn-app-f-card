import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import FishItem from './components/fishItem.component';
import coreStyles from '../../core-styles/styles';

class FishContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {fishData} = this.props;

    return (
      <View style={coreStyles.main}>
        <FishItem fishData={fishData}/>
      </View>
    );
  }
}

FishContainer.propTypes = {
  fishData: PropTypes.object.isRequired,
};

export default FishContainer;