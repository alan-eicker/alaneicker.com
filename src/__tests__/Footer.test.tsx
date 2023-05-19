import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('<Footer />', () => {
  it('Should render footer with copyright content', () => {
    render(
      <Footer
        copyright="Alan Eicker. All rights reserved."
        iconCredits={{
          websiteLinkUrl: 'https://icons8.com',
          websiteLinkText: 'Icons8',
          iconUrl: 'https://icons8.com/icon/OySmsSdy3UZN/beard',
          iconName: 'Beard',
        }}
      />,
    );

    expect(screen.getByText(/Alan Eicker. All rights reserved./i));
    expect(screen.getByRole('link', { name: /Icons8/i })).toHaveAttribute(
      'href',
      'https://icons8.com',
    );
    expect(screen.getByRole('link', { name: /Beard/i })).toHaveAttribute(
      'href',
      'https://icons8.com/icon/OySmsSdy3UZN/beard',
    );
  });
});
