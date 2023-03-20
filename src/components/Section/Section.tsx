import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

type Props = {
  className?: string;
  children: JSX.Element;
  sidebar?: JSX.Element;
  cols?: number[];
  id?: string;
};

const Section = ({
  id,
  className,
  children,
  sidebar,
  cols = [7, 4],
  ...other
}: Props) => (
  <section id={id} className={`section ${className}`} {...other}>
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
