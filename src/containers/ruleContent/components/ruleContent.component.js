import React, {PureComponent} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
	Image,
  Dimensions
} from 'react-native';
import { RkCard, RkText } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

import colors from '../../../core-styles/colors';

class RuleContentComponent extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
	  const {ruleData} = this.props;

    return (
      <ScrollView>
        <RkCard style={styles.itemWrap}>
					<Text style={styles.itemContent}>
						{ruleData.content}
					</Text>
        </RkCard>
      </ScrollView>
    );
  }
}

RuleContentComponent.propTypes = {
  ruleData: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
	itemWrap: {
	  backgroundColor: colors.lightTone,
    paddingBottom: 10
  },
	itemContent: {
		padding: 15
	}
});

export default RuleContentComponent;