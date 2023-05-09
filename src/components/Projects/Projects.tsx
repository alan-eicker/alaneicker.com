import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Section from '../Section';
import ProjectBox from '../ProjectBox';
import FeaturedProject from '../FeaturedProject';
import { ProjectsProps } from '../../interfaces/components';

const Projects: React.FC<ProjectsProps> = ({
  title,
  featured,
  otherProjects,
}) => (
  <>
    <Section id="projects">
      <>
        <FeaturedProject
          sectionTitle={title}
          projectImage={featured.image}
          projectTitle={featured.title}
          projectSubtitle={featured.subtitle}
          projectUrls={featured.urls}
          projectDescription={featured.content}
        />

        <h4 className="text-align-center@medium" style={{ marginTop: 60 }}>
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
