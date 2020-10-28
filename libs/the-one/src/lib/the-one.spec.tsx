import React from 'react';
import { render } from '@testing-library/react';

import TheOne from './the-one';

describe('TheOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TheOne />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<TheOne />);

    expect(getByText('I AM THE ONE APP')).toBeTruthy();
  });
});
