import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialMediaItem from '../../components/SocialMediaItem';

describe('<SocialMediaItem />', () => {
  const props = {
    title: 'Medium',
    url: 'https://medium.com/@alaneicker',
    path: 'm22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z',
    viewBox: '0 0 24 24',
    fill: '#212121',
    height: '45',
    width: '45',
  };

  beforeEach(() => {
    render(<SocialMediaItem {...props} />);
  });

  it('Should render a link with URL', () => {
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      props.url,
    );
  });
});
