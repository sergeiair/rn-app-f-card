import React, { PureComponent } from 'react';
import { View } from 'react-native';

import coreStyles from '../../core-styles/styles';

import TacklesComponent from './components/tackles.component';


class TacklesContainer extends PureComponent {
	render() {
		return (
			<View style={coreStyles.main}>
				<TacklesComponent />
			</View>
		);
	}
}

export default TacklesContainer;
