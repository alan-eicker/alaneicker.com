import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectBox from '../ProjectBox';
import type { OtherProjectsProps } from '../../interfaces/components';

const OtherProjects = ({ items }: OtherProjectsProps): JSX.Element => (
  <Grid>
    <Row>
      {items.map((project) => (
        <Col md={4} key={project.title}>
          <ProjectBox {...project} />
        </Col>
      ))}
    </Row>
  </Grid>
);

export default OtherProjects;
