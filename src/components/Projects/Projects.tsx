import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../Section';
import ProjectBox from '../ProjectBox';
import { ProjectsProps } from '../../types/components';

const Projects = ({ title, featured, otherProjects }: ProjectsProps) => (
  <>
    <Section id="projects">
      <>
        <Grid>
          <Row>
            <Col md={4}>
              <img
                className="featured-img"
                src={featured.image}
                alt={`${featured.title} screenshot`}
                width="100%"
              />
            </Col>
            <Col md={7} mdOffset={1}>
              <h4>{title}</h4>
              <h5 className="no-margin">{featured.title}</h5>
              <h6 className="no-margin">{featured.subtitle}</h6>
              <p>{featured.content}</p>
              <p>
                <a
                  className="btn-link"
                  href={featured.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {featured.urlText}
                </a>
              </p>
            </Col>
          </Row>
        </Grid>

        <h4 className="text-align-center@medium" style={{ marginTop: 32 }}>
          {otherProjects.title}
        </h4>

        <Grid>
          <Row>
            {otherProjects.items.map((project) => (
              <Col md={4} key={project.title}>
                <ProjectBox {...project} />
              </Col>
            ))}
          </Row>
        </Grid>
      </>
    </Section>
  </>
);

export default Projects;
