import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { exportAllDeclaration } from '@babel/types';
import BodyText from './components/Display/BodyText.js';
import TestRenderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders as expected', () => {
  const someVar = TestRenderer
    .create(<BodyText />)
    .toJSON();
  expect(someVar).toMatchSnapshot();
})