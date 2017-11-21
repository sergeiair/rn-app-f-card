import React, { PureComponent } from 'react';
import { View } from 'react-native';

import coreStyles from '../../core-styles/styles';

import SettingsComponent from './components/settings.component';


class SettingsContainer extends PureComponent {
	render() {
		return (
			<View style={coreStyles.main}>
				<SettingsComponent />
			</View>
		);
	}
}

export default SettingsContainer;
