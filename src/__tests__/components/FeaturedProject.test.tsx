import React from 'react';
import { screen, render, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import FeaturedProject from '../../components/FeaturedProject';

describe('<App />', () => {
  const props = {
    description:
      'A library of accessible react components for rapid application development.',
    icon: {
      viewBox: '0 0 100 100',
      fill: '#00bcd4',
      path: 'M90.646 59.903c-1.117-4.173-3.755-7.674-7.439-9.903 7.697-4.662 10.3-14.678 5.779-22.509a16.67 16.67 0 0 0-14.399-8.308c-2.782 0-5.533.717-7.983 2.063-.186-9-7.559-16.264-16.602-16.264s-16.418 7.264-16.604 16.264a16.6 16.6 0 0 0-7.984-2.063 16.67 16.67 0 0 0-14.398 8.308C6.493 35.322 9.097 45.338 16.794 50a16.49 16.49 0 0 0-7.439 9.903 16.5 16.5 0 0 0 1.66 12.604 16.67 16.67 0 0 0 14.399 8.309c2.784 0 5.534-.717 7.983-2.063.188 8.999 7.559 16.263 16.604 16.263a16.63 16.63 0 0 0 16.602-16.263c2.449 1.346 5.2 2.063 7.983 2.063h.002c5.923 0 11.439-3.183 14.397-8.309a16.5 16.5 0 0 0 1.661-12.604zm-16.06-35.901A11.84 11.84 0 0 1 84.814 29.9a11.81 11.81 0 0 1-4.316 16.109l-2.092 1.209-11.793-6.81V26.791l2.09-1.207a11.79 11.79 0 0 1 5.883-1.582zM50 63.618l-11.794-6.81V43.191l11.795-6.81 11.793 6.809v13.62L50 63.618zm11.794-1.245v8.055L54.818 66.4l6.976-4.027zM45.183 66.4l-6.977 4.027v-8.055l6.977 4.028zM33.388 54.027L26.413 50l6.975-4.027v8.054zm4.818-16.4v-8.055l6.977 4.028-6.977 4.027zm16.612-4.026l6.976-4.028v8.055l-6.976-4.027zm11.794 12.372L73.588 50l-6.976 4.027v-8.054zM50.001 9.801a11.81 11.81 0 0 1 11.793 11.794v2.415l-11.793 6.809-11.795-6.81v-2.414A11.81 11.81 0 0 1 50.001 9.801zM15.187 29.9a11.84 11.84 0 0 1 10.227-5.898c2.057 0 4.091.547 5.885 1.582l2.09 1.207V40.41l-11.793 6.809-2.092-1.209a11.81 11.81 0 0 1-4.317-16.11zm10.228 46.099h0c-4.208 0-8.127-2.261-10.229-5.9a11.72 11.72 0 0 1-1.178-8.948c.815-3.043 2.767-5.586 5.495-7.161l2.091-1.208 11.793 6.81v13.617l-2.09 1.209c-1.793 1.034-3.827 1.581-5.882 1.581zm24.586 14.199a11.81 11.81 0 0 1-11.795-11.794V75.99L50 69.181l11.794 6.81v2.414a11.81 11.81 0 0 1-11.793 11.793zm34.812-20.099a11.84 11.84 0 0 1-10.228 5.9c-2.056 0-4.09-.547-5.884-1.582l-2.09-1.209V59.591l11.793-6.81 2.092 1.208c2.729 1.575 4.68 4.118 5.494 7.161s.399 6.221-1.177 8.949zM50.001 47.102a2.9 2.9 0 0 0-2.9 2.898c0 1.599 1.301 2.898 2.9 2.898A2.9 2.9 0 0 0 52.899 50a2.9 2.9 0 0 0-2.898-2.898z',
      title: 'Atomik UI',
    },
    url: 'https://www.atomikui.com/',
    urlText: 'View documentation',
    title: 'Atomik UI',
  };

  beforeEach(() => {
    render(<FeaturedProject {...props} />);
  });

  it('Should set section title', () => {
    expect(
      screen.getByRole('heading', {
        level: 5,
        name: props.title,
      }),
    ).toBeInTheDocument();
  });

  it('Should render an icon', () => {
    expect(screen.getByTitle(props.icon.title)).toBeInTheDocument();
  });

  it('Should render the description content', () => {
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });

  it('Should render a link to the featured project', () => {
    expect(screen.getByRole('link', { name: props.urlText })).toHaveAttribute(
      'href',
      props.url,
    );
  });
});
