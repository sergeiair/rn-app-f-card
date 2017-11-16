import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

import RuleContent from './components/ruleContent.component';
import coreStyles from '../../core-styles/styles';

class FishContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {ruleData} = this.props;

    return (
      <View style={coreStyles.main}>
        <RuleContent ruleData={ruleData}/>
      </View>
    );
  }
}

FishContainer.propTypes = {
  ruleData: PropTypes.object.isRequired,
};

export default FishContainer;