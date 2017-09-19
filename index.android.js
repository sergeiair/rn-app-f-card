import { AppRegistry } from 'react-native';
import React from 'react';
import Realm from 'realm';


import App from './src/containers/App';

const RootApp = () => {
	Realm.copyBundledRealmFiles();

	return (
    <App />
	);
};

AppRegistry.registerComponent('untitled', () => RootApp);
