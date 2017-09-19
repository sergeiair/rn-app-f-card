import React, {PureComponent}  from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import coreStyles from '../../../core-styles/styles';
import colors from '../../../core-styles/colors';
import CardModel from '../../../models/card.model';

class Card extends PureComponent {

  get answerElements() {
    const {data, checked} = this.props;

    if (checked && data.card.textAnswer) {
      return (
        <Text style={styles.textAnswer}>
          {data.card.textAnswer}
        </Text>
      );
    } else if (checked && data.card.arrayAnswer) {
      return (
        <View>
          {data.card.arrayAnswer.map((answer, i) => {
            return (
              <View key={i}>
                <Text style={styles.sub}>{answer.sub}</Text>
                {
                  (answer.items || []).map((item, k) => {
                    return (
                      <Text key={k} style={styles.textAnswer}>{item}</Text>
                    );
                  })
                }
              </View>
            );
          })}
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    const {data} = this.props;

    return (
      <View style={styles.cardWrap}>
        <Text style={coreStyles.title2}>
          {data.card.question}
        </Text>
        <ScrollView style={styles.answer}>
          {this.answerElements}
        </ScrollView>
      </View>
    );
  }
}

Card.PropTypes = {
  checked: PropTypes.bool,
  data: CardModel,
};

const styles = StyleSheet.create({
  cardWrap: {
    flex: 1,
  },
  answer: {
    flex: 1,
  },
  textAnswer: {
    paddingLeft: 15,
    paddingRight: 5,
    textAlign: 'center',
    color: colors.green,
  },
  sub: {
    paddingLeft: 10,
    paddingRight: 5,
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
    color: colors.lightBlue,
  },
});


export default Card;