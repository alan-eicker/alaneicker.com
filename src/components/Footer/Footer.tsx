import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import IconList from '../IconList';
import { FooterProps } from '../../types/components';
import './Footer.scss';

const Footer = ({
  copyright,
  contactInfo,
  iconCredits,
  socialLinks,
}: FooterProps) => (
  <footer className="footer">
    <Grid>
      <Row>
        <Col md={6} className="footer__head">
          <p>
            Call me at{' '}
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a> or
            email me at{' '}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} {copyright}
          </p>
          <p>
            <a target="_blank" href={iconCredits.iconUrl} rel="noreferrer">
              {iconCredits.iconName}
            </a>{' '}
            icon by{' '}
            <a
              target="_blank"
              href={iconCredits.websiteLinkUrl}
              rel="noreferrer"
            >
              {iconCredits.websiteLinkText}
            </a>
          </p>
        </Col>
        <Col md={6} className="footer__footer">
          <IconList
            label="find me on the web at"
            items={socialLinks}
            justify="center"
            size={28}
          />
        </Col>
      </Row>
    </Grid>
  </footer>
);

export default Footer;
