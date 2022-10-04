import dotenv from 'dotenv';
import React from 'react';
import { createPortal } from 'react-dom';

dotenv.config();

type Props = {
  title: string;
};

const DocHead = ({ title }: Props) =>
  createPortal(<title>{title}</title>, document.querySelector('head')!);

export default DocHead;
