import React, { ReactNode } from 'react';
import { css } from 'react-emotion';
import Separator from '../components/separator';

interface Props {
  title: string;
  footer?: boolean;
  children: ReactNode;
}

const Service: React.SFC<Props> = ({ title, footer, children }) => (
  <section>
    <h3
      className={css`
        text-align: center;

        @media (max-width: 768px) {
          font-size: 110%;
        }
      `}
    >
      {title}
    </h3>
    {children}
    {footer ? <Separator /> : null}
  </section>
);

Service.defaultProps = {
  footer: true,
};
export default Service;
