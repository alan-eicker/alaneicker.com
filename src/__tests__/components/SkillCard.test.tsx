import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillCard from '../../components/SkillCard';

describe('<Section />', () => {
  const props = {
    category: 'a little bit about me',
    list: ['HTML', 'CSS', 'JavaScript'],
  };

  beforeEach(() => {
    render(<SkillCard {...props} />);
  });

  it('Should render a title', () => {
    console.log(screen.debug());
    expect(screen.getByText(/A little bit about me/)).toBeInTheDocument();
  });

  it('Should render a list of skills', () => {
    expect(screen.getByText(/HTML, CSS, JavaScript/)).toBeInTheDocument();
  });
});
