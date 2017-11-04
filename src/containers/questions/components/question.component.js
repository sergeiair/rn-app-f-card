import React, {PureComponent}  from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RkButton, RkCard } from 'react-native-ui-kitten';
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
          (
            data.question.options || []).map((opt, i) => {
              return (
                <TouchableOpacity key={opt.uid}
                  onPress={() => {toggleSelection(i);}}>
                    <Text style={this._getOptionStyles(i)}>
                      {opt.text}
                    </Text>
                </TouchableOpacity>
              );
            }
          )
        }
      </View>
    );
  }

  get checkedOptionsView() {
    const {data} = this.props;

    return (
      <View>
        {
          (
            data.question.options || []).map((opt, i) => {
              return (
                <Text key={opt.uid}
                  style={this._getOptionStyles(i)}>
                    {opt.text}
                </Text>
              );
            }
          )
        }
      </View>
    );
  }

  _getOptionStyles(index) {
    const {isSelected, isChecked} = this.props;

    if (isChecked) {
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
    const {data, isChecked} = this.props;

    return (
      <RkCard rkType='shadowed'>
        <View rkCardHeader>
          <Text>
	          {data.question.question}
          </Text>
        </View>
        <View rkCardContent>
	        {!isChecked ? this.optionsView : this.checkedOptionsView}
        </View>
      </RkCard>
    );
  }
}

Question.PropTypes = {
	data: QuestionModel,
	isChecked: PropTypes.bool.isRequired,
  isSelected: PropTypes.func.isRequired,
  toggleSelection: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  option: {

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