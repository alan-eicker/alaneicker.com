import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FeaturedProjectProps } from '../../interfaces/components';
import './FeaturedProject.scss';

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  sectionTitle,
  projectTitle,
  projectImage,
  projectSubtitle,
  projectDescription,
  projectUrls,
}) => (
  <div className="featured-project">
    <Grid>
      <Row>
        <Col md={3}>
          <img
            className="featured-project__project-image"
            src={projectImage}
            alt="featured project screenshot"
            width="100%"
          />
        </Col>
        <Col md={8} mdOffset={1}>
          <h4>{sectionTitle}</h4>
          <h5 className="featured-project__project-title">{projectTitle}</h5>
          <h6 className="featured-project__project-subtitle">
            {projectSubtitle}
          </h6>
          <p>{projectDescription}</p>
          <div className="featured-project__links">
            {projectUrls.map(({ href, text }) => (
              <a
                key={text}
                className="btn-link"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {text}
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default FeaturedProject;
