import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('<App />', () => {
  it('Should render without errors', () => {
    expect(render(<App />));
  });
});
