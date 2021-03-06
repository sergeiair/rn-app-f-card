import React, {PureComponent} from 'react';
import {
  View
} from 'react-native';
import { observer } from 'mobx-react/native';

import coreStyles from '../../core-styles/styles';

import QuestionsStore from './../../stores/questions.store';
import TestsStore from './../../stores/tests.store';

import QuestionsInitialView from './components/questionsInitialView.component';
import QuestionsProgressView from './components/questionsProgressView.component';


@observer
class QuestionsContainer extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {questionsStore} = this.props;

    questionsStore.prepare();
  }

  get currentQuestion() {
    const {questionsStore, testsStore} = this.props;

    return questionsStore.questions[testsStore.progress.current];
  }

  render() {
    const {testsStore, questionsStore} = this.props;

    return (
      <View style={coreStyles.main}>
        {
          testsStore.progress.current === null
            ? <QuestionsInitialView
                start={() => {testsStore.start(questionsStore.questions.length)}}/>

            : <QuestionsProgressView
		            currentQuestion={this.currentQuestion}
                toggleSelection={testsStore.toggleSelection.bind(testsStore)}
                switchNext={testsStore.nextItem.bind(testsStore)}
                check={testsStore.checkItem.bind(testsStore)}
                isSelected={testsStore.isSelected.bind(testsStore)}
                isChecked={testsStore.progress.checked}/>
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