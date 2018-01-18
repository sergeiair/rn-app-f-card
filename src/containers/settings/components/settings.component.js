import React, { PureComponent } from 'react';
import {
	ScrollView,
	View,
	Text,
	Picker,
	StyleSheet,
	Linking,
	TouchableOpacity
} from 'react-native';

import I18n from '../../../i18n';
import LocalizationService from '../../../services/localization.service';

import colors from '../../../core-styles/colors';
import coreStyles from '../../../core-styles/styles';

const appVersion = require('../../../../package.json').version;


class SettingsComponent extends PureComponent {

	constructor(props) {
		super(props);

		this.state = {
			locale: I18n.currentLocale(),
		}
	}

	_sendMail() {
		Linking.openURL('mailto:zsg.green@gmail.com');
	}

	_changeLocale(value) {
		this.setState({locale: value});

		LocalizationService.setLocale(value);
	}

	render() {
		return (
			<ScrollView style={styles.wrap}>
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
					<TouchableOpacity onPress={this._sendMail.bind(this)}>
						<Text style={styles.rowText}>
							{I18n.t('buttons.settings.contactMe')}
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowText}>
						{I18n.t('texts.settings.version')}: {appVersion}
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowText}>
						{I18n.t('texts.settings.icons')}: Flaticon CC 3.0 BY
					</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.rowText}>
						{I18n.t('texts.settings.disclaimer')}:
					</Text>
					<Text style={styles.smallRowText}>
						{I18n.t('texts.settings.disclaimerText')}
					</Text>
				</View>
			</ScrollView>
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
		borderBottomColor: colors.grey
	},
	rowText: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 7,
		paddingRight: 7,
	},
	smallRowText: {
		paddingTop: 5,
		paddingBottom: 10,
		paddingLeft: 7,
		paddingRight: 7,
		fontSize: 11,
	}
});

export default SettingsComponent;