import React from 'react';
import { fireEvent, screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../components/Header';

describe('<Header />', () => {
  const props = {
    logoImg: '/beard.png',
    title: 'Alan Eicker',
    subtitle: 'Front End Engineer',
    nav: ['/#About', '/#Skills', '/#Projects', '/#Career'],
  };

  beforeEach(() => {
    render(<Header {...props} />);
  });

  it('Should render logo anchor title based on title and subtitle props', () => {
    expect(screen.getByTitle(`${props.title} - ${props.subtitle}`));
  });

  it('Should render the navigation', () => {
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(4);

    items.forEach((item, i) => {
      const name = props.nav[i].replace('/#', '');
      expect(within(item).getByRole('link', { name })).toHaveAttribute(
        'href',
        props.nav[i],
      );
    });
  });

  it('Should set the active class of the selected menu item', () => {
    const aboutLink = screen.getByRole('link', { name: /About/i });

    fireEvent.click(aboutLink);

    expect(aboutLink).toHaveClass('is-active');
  });

  it('Should reset the navigation if home link is clicked', () => {
    const [homeLink, ...navLinks] = screen.getAllByRole('link');

    fireEvent.click(navLinks[0]);
    fireEvent.click(homeLink);

    navLinks.forEach((link) => {
      expect(link).not.toHaveClass('is-active');
    });
  });
});
