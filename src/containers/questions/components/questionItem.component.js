import React, {PureComponent}  from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
	Dimensions,
} from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
import PropTypes from 'prop-types';

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
      <View style={styles.optionsWrap}>
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
      <View style={styles.optionsWrap}>
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
          <Text style={styles.question}>
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
	optionsWrap: {
    flexDirection: 'column',
	},
  option: {
	  width: Dimensions.get('window').width - 30,
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey
  },
	question: {
		fontSize: 17,
    textAlign: 'center'
	},
  selectedOption: {
	  color: colors.blue,
	  borderColor: colors.blue
  },
  correctOption: {
	  color: colors.green,
	  borderColor: colors.green
  },
  wrongOption: {
    color: colors.red,
	  borderColor: colors.red
  },
});

export default Question;