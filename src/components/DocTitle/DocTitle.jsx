import React from 'react';
import { createPortal } from 'react-dom';

const DocTitle = ({ title }) =>
  createPortal(<title>{title}</title>, document.querySelector('head'));

export default DocTitle;
