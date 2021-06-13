import React from 'react';
import { render } from 'react-dom';
import Calculator from './Components/Calculator/Calculator';

import './index.html';

const App = () => {
  return <Calculator />;
};
render(<App />, document.querySelector('#app'));
