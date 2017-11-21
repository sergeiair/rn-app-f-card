import React from 'react';
import { View, Text } from 'react-native';
import { RkCard, RkButton } from 'react-native-ui-kitten';
import I18n from 'react-native-i18n';
import PropTypes from 'prop-types';


function LabeledButtonCard(props) {
		const {textCode, buttonCode, action} = props;

		return (
			<RkCard rkType='shadowed'>
				<View rkCardHeader>
					<Text>
						{I18n.t(textCode)}
					</Text>
				</View>
				<View rkCardContent>
					<RkButton onPress={action}
						rkType='rounded'>
							<Text>
								{I18n.t(buttonCode)}
							</Text>
					</RkButton>
				</View>
			</RkCard>
		);
}


LabeledButtonCard.propTypes = {
	textCode: PropTypes.string,
	buttonCode: PropTypes.string.isRequired,
	action: PropTypes.func.isRequired
};
LabeledButtonCard.defaultProps = {};

export default LabeledButtonCard;