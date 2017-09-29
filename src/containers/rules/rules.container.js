import React, {PureComponent} from 'react';
import { observer } from 'mobx-react/native';
import {
  View,
  Text,
} from 'react-native';


import RulesStore from './../../stores/rules.store';

import coreStyles from '../../core-styles/styles';

import RulesList from './components/rulesList.component';

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
      <View style={coreStyles.main}>
				<RulesList data={rulesStore.rules}/>
      </View>
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