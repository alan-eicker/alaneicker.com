import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  title: string;
};

const DocTitle = ({ title }: Props) =>
  createPortal(<title>{title}</title>, document.querySelector('head')!);

export default DocTitle;
