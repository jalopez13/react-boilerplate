import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/AppComponent';

describe('App', () => {
  it('Renders without erros', () => {
    render(<App />);
  });
});
