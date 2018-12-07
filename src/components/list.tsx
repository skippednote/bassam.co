import styled from 'react-emotion';

const List = styled<{ plain?: boolean }, 'ul'>('ul')`
  list-style: ${({ plain }) => (plain ? 'none' : 'inherit')};
  ${({ plain }) => (plain ? 'padding-left: 0 !important' : null)};
`;

List.defaultProps = {
  plain: false,
};

export default List;
