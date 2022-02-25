import React from 'react';

import whyDidYouRender from '@welldone-software/why-did-you-render';

import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/styles.app.css';

whyDidYouRender(React, {
  trackAllPureComponents: true
});

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
