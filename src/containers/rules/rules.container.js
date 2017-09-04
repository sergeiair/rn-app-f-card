import React, {PureComponent} from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
	ScrollView,
  TouchableOpacity,
} from 'react-native';

import RulesStore from './../../stores/rules.store';
import coreStyles from '../../core-styles/styles';

@observer
class RulesContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
	  const {rulesStore} = this.props;

	  rulesStore.fetch();
  }

  render() {
	  const {rulesStore} = this.props;

    return (
      <ScrollView style={coreStyles.main}>
	      <Text>Length: {rulesStore.rules[1] ? rulesStore.rules[1].chapter.content : null}</Text>
      </ScrollView>
    );
  }

  componentWillUnmount() {
	  const {rulesStore} = this.props;

	  rulesStore.reset();
  }
}

RulesContainer.defaultProps = {
  rulesStore: new RulesStore(),
};

export default RulesContainer;