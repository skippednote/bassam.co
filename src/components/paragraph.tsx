import styled from 'react-emotion';

const Paragraph = styled<{ leading?: boolean }, 'div'>('div')`
  margin-bottom: 3rem;
  font-size: ${({ leading }) => (leading ? '120%' : '100%')};

  @media (max-width: 768px) {
    font-size: 100%;
  }
`;

export default Paragraph;
