import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Preface from '../../components/Preface';

describe('<Preface />', () => {
  it('Should render preface text', () => {
    render(<Preface text="Preface text" />);
    expect(screen.getByText(/Preface text/)).toBeInTheDocument();
  });
});
