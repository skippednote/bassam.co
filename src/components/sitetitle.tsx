import styled from 'react-emotion';

const SiteTitle = styled<{ small?: boolean }, 'h1'>('h1')`
  font-family: Pacifico;
  font-weight: normal;
  background: linear-gradient(to bottom, #00c6ff, #a900ff);
  font-size: ${({ small }) => (small ? '3em' : '6em')};
  line-height: ${({ small }) => (small ? '2' : '1')};
  position: relative;
  padding: ${({ small }) => (small ? '0' : '0.875em 0.25em 0')};
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: ${({ small }) => (small ? '2rem' : '3rem')};
    padding-top: ${({ small }) => (small ? '0rem' : '7rem')};
  }
`;
SiteTitle.defaultProps = {
  small: false,
};

export default SiteTitle;
