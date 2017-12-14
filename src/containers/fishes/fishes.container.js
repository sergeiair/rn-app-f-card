import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react/native';

import FishesList from './components/fishesList.component';

import FishesStore from './../../stores/fishes.store';

import coreStyles from '../../core-styles/styles';


@observer
class FishesContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
	  const {fishesStore} = this.props;

	  fishesStore.fetch();
  }

  render() {
	  const {fishesStore} = this.props;

    return (
      <View style={coreStyles.main}>
        <FishesList data={fishesStore.fishes}/>
      </View>
    );
  }

  componentWillUnmount() {
	  const {fishesStore} = this.props;

	  fishesStore.reset();
  }
}

FishesContainer.defaultProps = {
  fishesStore: new FishesStore(),
};

export default FishesContainer;