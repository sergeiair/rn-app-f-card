import React, {PureComponent} from 'react';
import {
	View,
	Text,
} from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import coreStyles from '../../../core-styles/styles';

class QuestionsInitialView extends PureComponent {
	render() {
		const {start} = this.props;

		return (
			<View style={coreStyles.nonScrollWrap}>
				<RkCard rkType='shadowed'>
					<View rkCardHeader>
						<Text>
							{I18n.t('texts.game.initial')}
						</Text>
					</View>
					<View rkCardContent>
						<RkButton onPress={start} rkType='rounded'>
							<Text>
								{I18n.t('buttons.game.start')}
							</Text>
						</RkButton>
					</View>
				</RkCard>
			</View>
		);
	}
}

QuestionsInitialView.propTypes = {
	start: PropTypes.func.isRequired,
};
QuestionsInitialView.defaultProps = {};

export default QuestionsInitialView;