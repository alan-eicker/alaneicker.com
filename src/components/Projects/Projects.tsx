import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../Section';
import { ProjectsProps } from '../../types/components';

const Projects = ({ title, featured, otherProjects }: ProjectsProps) => (
  <>
    <Section id="projects">
      <>
        <Grid>
          <Row>
            <Col md={4}>
              <img
                className="has-shadow"
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
                <div key={project.title} className="project-box">
                  <div className="project-box__head">
                    <svg
                      className="project-box__folder-icon"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11.086 5.5l2.457 2.414 0.629 0.586h15.829v18h-28v-21h9.086zM12 3.5h-10c-1.105 0-2 0.896-2 2v21c0 1.105 0.895 2 2 2h28c1.105 0 2-0.895 2-2v-18c0-1.104-0.895-2-2-2h-15z"></path>
                    </svg>
                    <a
                      className="project-box__link"
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label="view project in github"
                    >
                      <i className="devicon-github-original"></i>
                    </a>
                  </div>
                  <div className="project-box__body">
                    <h5 className="project-box__title">{project.title}</h5>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-box__footer">
                    {project.techUsed.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Grid>
      </>
    </Section>
  </>
);

export default Projects;
