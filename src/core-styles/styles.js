import { StyleSheet } from 'react-native';

import colors from './colors';

const coreStyles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
  },
  wrap: {
    flex: 1,
    flexDirection: 'column',
  },
  body: {
    flex: .8,
  },
  footer: {
    flex: .2,
  },
	defaultInput: {
		margin: 10,
		padding: 10,
	},
  defaultBtnGreen: {
    margin: 10,
    padding: 20,
    backgroundColor: colors.green,
  },
  defaultBtnBlue: {
    margin: 10,
    padding: 20,
    backgroundColor: colors.lightBlue,
  },
  defaultPicker: {
    margin: 10,
    padding: 20,
  },
  title1: {
    margin: 20,
    fontSize: 16,
    textAlign: 'center',
    color: colors.lightBlue,
  },
  title2: {
    margin: 20,
    fontSize: 18,
    textAlign: 'center',
    color: colors.lightBlue,
  },
  listItem: {
	  padding: 10,
  },
  whiteText: {
    color: colors.lightTone,
  }
});

export * from './colors';
export default coreStyles;

