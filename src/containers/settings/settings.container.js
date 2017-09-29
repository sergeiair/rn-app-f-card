import React, { PureComponent } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

import SettingsComponent from './components/settings.component';

class SettingsContainer extends PureComponent {
	render() {
		return (
			<SettingsComponent />
		);
	}
}

export default SettingsContainer;
