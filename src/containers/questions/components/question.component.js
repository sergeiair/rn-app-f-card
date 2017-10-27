import React, {PureComponent}  from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import coreStyles from '../../../core-styles/styles';
import colors from '../../../core-styles/colors';
import QuestionModel from '../../../models/question.model';

class Question extends PureComponent {

  baseOptionStyle = StyleSheet.flatten(styles.option);
  selectedOptionStyle = StyleSheet.flatten(styles.selectedOption);
  correctOptionStyle = StyleSheet.flatten(styles.correctOption);
  wrongOptionStyle = StyleSheet.flatten(styles.wrongOption);

  optionsStyles = {
    selected: Object.assign({},
      this.baseOptionStyle,
      this.selectedOptionStyle,
    ),
    selectedCorrect: Object.assign({},
      this.baseOptionStyle,
      this.selectedOptionStyle,
      this.correctOptionStyle,
    ),
    selectedWrong: Object.assign({},
      this.baseOptionStyle,
      this.selectedOptionStyle,
      this.wrongOptionStyle,
    ),
    notSelectedCorrect: Object.assign({},
      this.baseOptionStyle,
      this.wrongOptionStyle,
    ),
  };

  get optionsView() {
    const {data, toggleSelection} = this.props;
    return (
      <View>
        {
          (data.question.options || []).map((opt, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => {toggleSelection(i);}}>
                <Text style={this._getOptionStyles(i)}>{opt}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }

  get checkedOptionsView() {
    const {data} = this.props;
    return (
      <View>
        {
          (data.question.options || []).map((opt, i) => {
            return (<Text key={i} style={this._getOptionStyles(i)}>{opt}</Text>);
          })
        }
      </View>
    );
  }

  _getOptionStyles(index) {
    const {isSelected, checked} = this.props;

    if (checked) {
      if (isSelected(index) && this._isCorrect(index)) {
        return this.optionsStyles.selectedCorrect;
      } else if (isSelected(index) && !this._isCorrect(index)) {
        return this.optionsStyles.selectedWrong;
      } else if(!isSelected(index) && this._isCorrect(index)) {
        return this.optionsStyles.notSelectedCorrect;
      } else {
        return styles.option;
      }
    } else {
      return isSelected(index)
        ? this.optionsStyles.selected : styles.option;
    }
  }

  _isCorrect(index) {
    const {data} = this.props;

    return data.question.arrayAnswer
      ? data.question.arrayAnswer.indexOf(index) >= 0
      : data.question.indexAnswer === index;
  }

  render() {
    const {data, checked} = this.props;

    return (
      <View style={styles.cardWrap}>
        <Text style={coreStyles.title2}>
          {data.question.question}
          </Text>
        <View style={styles.options}>
          {!checked ? this.optionsView : this.checkedOptionsView}
        </View>
      </View>
    );
  }
}

Question.PropTypes = {
  isSelected: PropTypes.func,
  toggleSelection: PropTypes.func,
  checked: PropTypes.bool,
  data: QuestionModel,
};

const styles = StyleSheet.create({
  cardWrap: {
    flex: 1,
  },
  options: {
    flex: 1,
  },
  option: {
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    fontSize: 16,
    textAlign: 'left',
    color: colors.lightTone,
    backgroundColor: colors.lightBlue,
  },
  selectedOption: {
    backgroundColor: colors.blue,
  },
  correctOption: {
    borderLeftWidth: 4,
    borderLeftColor: colors.green,
  },
  wrongOption: {
    borderLeftWidth: 4,
    borderLeftColor: colors.red,
  },
});

export default Question;