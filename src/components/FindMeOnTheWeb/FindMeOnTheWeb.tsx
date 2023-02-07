import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../Section';
import SocialMediaItem from '../SocialMediaItem';

type Props = {
  title: string;
  content: {
    title: string;
    url: string;
    path: string;
    viewBox: string;
    fill: string;
    height: string;
    width: string;
  }[];
};

const FindMeOnTheWeb = ({ title, content, ...others }: Props) => (
  <Section title={title} {...others}>
    <Grid>
      <Row>
        {content.map((item) => (
          <Col md={3} key={item.title} style={{ paddingBottom: 16 }}>
            <SocialMediaItem {...item} />
          </Col>
        ))}
      </Row>
    </Grid>
  </Section>
);

export default FindMeOnTheWeb;
