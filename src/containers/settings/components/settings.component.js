import React, { PureComponent } from 'react';
import {
	View,
	Text,
	Picker,
	StyleSheet
} from 'react-native';

import I18n from '../../../i18n';
import LocalizationService from '../../../services/localization.service';

import colors from '../../../core-styles/colors';

const appVersion = require('../../../../package.json').version;


class SettingsComponent extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			locale: I18n.currentLocale(),
		}
	}

	_changeLocale(value) {
		this.setState({locale: value});

		LocalizationService.setLocale(value);
	}

	render() {
		return (
			<View style={styles.wrap}>
				<View style={styles.row}>
					<Picker
						selectedValue={this.state.locale}
						onValueChange={this._changeLocale.bind(this)}>
							<Picker.Item label="English" value="en-US" />
							<Picker.Item label="Polski" value="pl-PL" />
							<Picker.Item label="Русский" value="ru-RU" />
					</Picker>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowText}>
						Version {appVersion}
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrap: {
		flex: 1,
		backgroundColor: colors.lightTone
	},
	row: {
		padding: 7,
		borderBottomWidth: 1,
		borderBottomColor: colors.paleGrey
	},
	rowText: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 7,
		paddingRight: 7,
	}
});

export default SettingsComponent;