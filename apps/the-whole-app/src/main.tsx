import React from 'react';
import ReactDOM from 'react-dom';

import { TheOne } from '@play-with-nx/the-one';
import { TheOther } from '@play-with-nx/the-other';
import { Common } from '@play-with-nx/common';

ReactDOM.render(
  <React.StrictMode>
    <TheOne />
    <Common />
    <TheOther />
  </React.StrictMode>,
  document.getElementById('root')
);
