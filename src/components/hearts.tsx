import React from 'react';
import styled, { keyframes } from 'react-emotion';
import SiteTitle from './sitetitle';
import heart from '../images/heart.png';

const heartAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: - 2800px 0;
  }
`;

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heart = styled<{ flipped?: boolean }, 'div'>('div')`
  width: 33%;
  height: 200px;
  background: url(${heart});
  cursor: pointer;
  animation: ${heartAnimation} 1.5s steps(28) infinite;
  background-position: ${({ flipped }) => (flipped ? '-2800px 0' : '2800px 0')};
`;
Heart.defaultProps = {
  flipped: false,
};

const Hearts = () => (
  <Container>
    <Heart flipped={true} />
    <SiteTitle small={true}>Aliya & Baheej</SiteTitle>
    <Heart />
  </Container>
);

export default Hearts;
