import React, {PureComponent} from 'react';
import {
  View,
  Text,
  Picker,
  TouchableOpacity,
} from 'react-native';
import { observer } from 'mobx-react/native';

import { questionsAreas } from '../../assets/questions.index';
import coreStyles from '../../core-styles/styles';

import QuestionsStore from './../../stores/questions.store';
import TestsStore from './../../stores/tests.store';

import Question from './components/question.component';

@observer
class QuestionsContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {questionsStore} = this.props;

    questionsStore.prepare(questionsAreas[0]);
  }

  get currentQuestion() {
    const {questionsStore, testsStore} = this.props;

    return questionsStore.questions[testsStore.progress.current];
  }

  get initialView() {
    const { questionsStore, testsStore } = this.props;

    return (
      <View>
        <Text style={coreStyles.title1}>
          Questions: {questionsStore.questions.length}
        </Text>
        <Picker
          style={coreStyles.defaultPicker}
          selectedValue={questionsStore.area}
          onValueChange={(value) => questionsStore.prepare(value)}>
          {
            questionsAreas.map((item, index) => {
              return (<Picker.Item key={index} label={item } value={item} />);
            })
          }
        </Picker>
        <TouchableOpacity  style={coreStyles.defaultBtnBlue}
          onPress={testsStore.start.bind(testsStore, questionsStore.questions.length)}>
            <Text style={coreStyles.whiteText}>Start questions</Text>
        </TouchableOpacity>
      </View>
    );
  }

  get progressButtons() {
    const {testsStore} = this.props;

    return testsStore.progress.checked
      ? (
        <TouchableOpacity onPress={testsStore.nextItem.bind(testsStore)}
          style={coreStyles.defaultBtnGreen}>
            <Text style={coreStyles.whiteText}>Next</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={testsStore.checkItem.bind(testsStore)}
          style={coreStyles.defaultBtnBlue}>
            <Text style={coreStyles.whiteText}>Check answer</Text>
        </TouchableOpacity>
      );
  }

  get QuestionView() {
    const {testsStore} = this.props;

    return (
      <View style={coreStyles.wrap}>
        <View style={coreStyles.body}>
          <Question data={this.currentQuestion}
            toggleSelection={testsStore.toggleSelection.bind(testsStore)}
            isSelected={testsStore.isSelected.bind(testsStore)}
            checked={testsStore.progress.checked}/>
        </View>
        <View style={coreStyles.footer}>
          {this.progressButtons}
        </View>
      </View>
    );
  }

  render() {
    const {testsStore} = this.props;

    return (
      <View style={coreStyles.main}>
        {
          testsStore.progress.current === null
            ? this.initialView
            : this.QuestionView
        }
      </View>
    );
  }

  componentWillUnmount() {
    const {testsStore, questionsStore} = this.props;

	  questionsStore.reset();
    testsStore.reset();
  }
}

QuestionsContainer.defaultProps = {
  questionsStore: new QuestionsStore(),
  testsStore: new TestsStore(),
};

export default QuestionsContainer;