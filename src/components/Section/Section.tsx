import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import { Grid, Row, Col } from 'react-flexbox-grid';
import type { SectionProps } from '../../interfaces/components';
import { useAppContext } from '../../AppProvider';
import './Section.scss';

const Section = ({
  id,
  className,
  children,
  sidebar,
  cols = [7, 4],
  ...other
}: SectionProps): JSX.Element => {
  const { setSectionOffsetYState } = useAppContext();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (ref.current) {
      const { offsetTop } = ref.current;
      setSectionOffsetYState({ [id as string]: offsetTop });
    }
  }, [ref]);

  return (
    <section
      ref={ref}
      id={id}
      className={classnames('section', className)}
      {...other}
    >
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
};

export default Section;
