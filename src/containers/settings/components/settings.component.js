import React, { PureComponent } from 'react';
import {
	View,
	Text,
	Picker,
} from 'react-native';

import I18n from '../../../i18n';
import LocalizationService from '../../../services/localization.service';


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
			<View>
				<Picker
					selectedValue={this.state.locale}
					onValueChange={this._changeLocale.bind(this)}>
					<Picker.Item label="English" value="en-US" />
					<Picker.Item label="Polski" value="pl-PL" />
					<Picker.Item label="Русский" value="ru-RU" />
				</Picker>
			</View>
		);
	}
}

export default SettingsComponent;