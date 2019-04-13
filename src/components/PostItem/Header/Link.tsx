import styled from 'styled-components';
import { COLOR_SECONDARY } from 'Styles/colors';
import Link from 'Components/Link';

const PostItemHeaderLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: ${COLOR_SECONDARY};
  }
`;

export default PostItemHeaderLink;