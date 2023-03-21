import React from 'react';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { SectionProps } from '../../types/components';

const Section = ({
  id,
  className,
  children,
  sidebar,
  cols = [7, 4],
  ...other
}: SectionProps) => (
  <section id={id} className={classnames('section', className)} {...other}>
    <Grid>
      <Row>
        <Col md={sidebar ? cols[0] : 12}>{children}</Col>
        {sidebar && (
          <>
            <Col md={1}>&nbsp;</Col>
            <Col md={cols[1]}>{sidebar}</Col>
          </>
        )}
      </Row>
    </Grid>
  </section>
);

export default Section;
