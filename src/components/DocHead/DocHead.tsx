import dotenv from 'dotenv';
import React from 'react';
import { createPortal } from 'react-dom';
import { DocHeadProps } from '../../types/components';

dotenv.config();

const DocHead: React.FC<DocHeadProps> = ({ title }) =>
  createPortal(<title>{title}</title>, document.querySelector('head')!);

export default DocHead;
