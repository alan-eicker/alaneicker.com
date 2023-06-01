import React from 'react';
import { screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

const props = {
  copyright: 'Alan Eicker. All rights reserved.',
  contactInfo: {
    phone: '555-555-5555',
    email: 'person@email.com',
  },
  iconCredits: {
    websiteLinkUrl: 'https://www.iconwebsite.com',
    websiteLinkText: 'icon website',
    iconUrl: 'https://www.iconwebsite.com/icon.png',
    iconName: 'Cool Icon',
  },
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'http://linkedin.com/alaneicker',
      icon: 'linked-icon-name',
    },
  ],
};

describe('<Footer />', () => {
  beforeEach(() => {
    render(<Footer {...props} />);
  });

  it('Should render copyright text', () => {
    expect(screen.getByText(/Alan Eicker. All rights reserved./i));
  });

  it('Should render email and phone number', () => {
    expect(
      screen.getByRole('link', { name: props.contactInfo.email }),
    ).toHaveAttribute('href', `mailto:${props.contactInfo.email}`);
    expect(
      screen.getByRole('link', { name: props.contactInfo.phone }),
    ).toHaveAttribute('href', `tel:${props.contactInfo.phone}`);
  });

  const socialLinks = props.socialLinks.map((link) => Object.values(link));

  test.each(socialLinks)(
    'Should render social media link with text %p, href %p, and icon %p',
    (text, href, icon) => {
      const link = screen.getByRole('link', { name: text });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
      expect(document.querySelector(`.${icon}`)).toBeInTheDocument();
    },
  );
});
