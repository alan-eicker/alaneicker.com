import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../../components/Footer';

describe('<App />', () => {
  it('Should render footer with copyright content', () => {
    render(
      <Footer
        copyright="Alan Eicker. All rights reserved."
        emailAddress="alaneicker@email.com"
        phoneNumber="555-555-5555"
      />,
    );

    expect(
      screen.getByText(/Alan Eicker. All rights reserved./),
    ).toBeInTheDocument();
    expect(screen.getByText(/alaneicker@email.com/)).toBeInTheDocument();
    expect(screen.getByText(/555-555-5555/)).toBeInTheDocument();
  });
});
