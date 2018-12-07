import styled from 'react-emotion';

const Title = styled<{ clearBottom?: boolean }, 'h1'>('h1')`
  font-size: 3rem;
  margin-bottom: ${({ clearBottom }) => (clearBottom ? 0 : '3rem')};
  max-width: 60vw;
  margin-left: auto;
  margin-right: auto;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    max-width: 90vw;
  }
`;

Title.defaultProps = {
  clearBottom: false,
};

export default Title;
