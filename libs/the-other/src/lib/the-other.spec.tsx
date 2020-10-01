import React from 'react';
import { render } from '@testing-library/react';

import TheOther from './the-other';

describe('TheOther', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TheOther />);
    expect(baseElement).toBeTruthy();
  });
});
