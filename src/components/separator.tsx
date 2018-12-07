import React from 'react';
import { css } from 'react-emotion';
import line from '../svg/line.svg';

const Separator = () => (
  <div
    className={css`
      text-align: center;
      margin-bottom: 3rem;
    `}
  >
    <img src={line} alt="separator line" />
  </div>
);

export default Separator;
