import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';

class ExtendedText extends PureComponent {

  _confirm(data) {
    Alert.alert(
      `Want to cancel test and read some theory?`,
      `Attention. Your progress won't be saved`,
      [
        {
          text: 'Oh no', onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'Yes, read', onPress: () => {
            this.props.onKeywordPress(data);
          },
        },
      ],
      { cancelable: false }
    )
  }

  render() {
    const {styles, text} = this.props;

    return (
      <View>
        <Text style={styles}>
          {
            (text || '').split(/[{}]+/)
              .filter(el => el)
              .map((el, index) => {
                return el.indexOf('$') === 0
                  ? <Text key={index} style={{fontWeight: 'bold'}}
                      onPress={this._confirm.bind(this, el)}>
                        {el.substr(1)}
                    </Text>
                  : <Text key={index}>{el}</Text>
                })
          }
        </Text>
      </View>
    );
  }
}

ExtendedText.PropTypes = {
  styles: PropTypes.object,
  text: PropTypes.string,
  onKeywordPress: PropTypes.func,
};

export default ExtendedText;