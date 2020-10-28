import React from 'react';
import { render } from '@testing-library/react';

import TheOther from './the-other';

describe('TheOther', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TheOther />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<TheOther />);

    expect(getByText('Welcome to the-other-app!')).toBeTruthy();
  });
});
