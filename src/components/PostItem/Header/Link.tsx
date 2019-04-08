import styled from 'styled-components';
import {
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY
} from 'Styles/colors';
import Link from 'Components/Link';

const PostItemHeaderLink = styled(Link)`
  color: ${COLOR_PRIMARY_DARK};
  text-decoration: none;

  &:hover {
    color: ${COLOR_PRIMARY};
  }
`;

export default PostItemHeaderLink;