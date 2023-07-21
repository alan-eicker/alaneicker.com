import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ProjectBox from '../ProjectBox';
import type { OtherProjectsProps } from '../../types/components';

const OtherProjects: React.FC<OtherProjectsProps> = ({ items }) => (
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
