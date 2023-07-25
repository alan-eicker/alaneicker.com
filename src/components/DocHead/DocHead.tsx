import dotenv from 'dotenv';
import React from 'react';
import { createPortal } from 'react-dom';
import type { DocHeadProps } from '../../interfaces/components';

dotenv.config();

const DocHead = ({ title }: DocHeadProps): JSX.Element =>
  createPortal(<title>{title}</title>, document.querySelector('head')!);

export default DocHead;
