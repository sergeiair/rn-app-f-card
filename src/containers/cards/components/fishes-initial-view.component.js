import React, {PureComponent} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';
import I18n from 'react-native-i18n';

import coreStyles from '../../../core-styles/styles';

class FishesInitialView extends PureComponent {
	render() {
		const {showNext} = this.props;

		return (
			<View style={coreStyles.nonScrollWrap}>
				<RkCard rkType='shadowed'>
					<View rkCardHeader>
						<Text>
							{I18n.t('texts.game.initial')}
						</Text>
					</View>
					<View rkCardContent>
						<RkButton onPress={showNext} rkType='rounded'>
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

FishesInitialView.propTypes = {
	showNext: PropTypes.func.isRequired,
};
FishesInitialView.defaultProps = {};

const styles = StyleSheet.create({

});

export default FishesInitialView;