import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../components/About';

describe('<About />', () => {
  const props = {
    key: 'About',
    title: 'A Bit About Me',
    image: '',
    content:
      "I began my journey thirteen years ago as a junior front-end engineer for a small design company building ColdFusion websites for construction companies. Today, I lead the front-end efforts for one of America's largest insurance companies, working with technologies such as React and Node.js.|Throughout my career, I've seen the Web grow from simple static HTML websites into complex data-driven Progressive Web Apps. Over the years, I've invested countless hours honing my skills to stay on top of the next emerging technology trend. I'm not an expert at everything out there, but I'd be confident building just about anything UI related.",
  };

  beforeEach(() => {
    render(<About {...props} />);
  });

  it('Should set section title', () => {
    expect(
      screen.getByRole('heading', {
        level: 4,
        name: props.title,
      }),
    );
  });

  it('Should render content', () => {
    const paragraphs = props.content.split('|');

    paragraphs.forEach((p) => {
      expect(screen.getByText(p));
    });
  });
});
