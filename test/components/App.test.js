import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../src/containers/App';

it('renders <App/> correctly', () => {
    const component = renderer.create(
        <App/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    component.unmount();
});
