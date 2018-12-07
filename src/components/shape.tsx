import React from 'react';
import { css } from 'react-emotion';
import shape from '../svg/shape.svg';

const Shape = () => (
  <img
    alt="squiggly shape"
    className={css`
      width: 100%;
    `}
    src={shape}
  />
);

export default Shape;
