import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RepoList from '../../components/RepoList';

describe('<RepoList />', () => {
  const props = {
    items: [
      {
        description: 'My project repo description',
        name: 'MyProjectRepo',
        html_url: 'https://url/to/repo',
      },
      {
        description: 'My other project repo description',
        name: 'MyOtherProjectRepo',
        html_url: 'https://url/to/repo',
      },
    ],
  };

  it('Should render a list of repositiories with one ecluded', () => {
    render(<RepoList excludes={new RegExp(/MyOtherProjectRepo/)} {...props} />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems).toHaveLength(1);
  });

  it('Should render a list of repositiories with none exluded', () => {
    render(<RepoList {...props} />);
    const listitems = screen.getAllByRole('listitem');
    expect(listitems).toHaveLength(2);
  });
});
