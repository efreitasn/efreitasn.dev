import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';
import {
  COLOR_GREY_1,
  COLOR_GREY_4
} from 'Styles/colors';

const PostContent = styled.div`
  line-height: 2.4rem;
  text-align: justify;

  & > p {
    margin: 1rem 0;
    padding: 0 4rem;

    ${bk2`
      padding: 0 2rem
    `}
  }

  & > blockquote {
    background: ${COLOR_GREY_1};
    border-radius: 10px;
    color: ${COLOR_GREY_4};
    margin: 2rem 4rem;
    padding: 1.5rem 2.5rem;

    ${bk2`
      margin: 0 2rem;
    `}

    & > p {
      padding: 0;
    }
  }

  & .gatsby-highlight {
    margin: 2rem 0;
  }
`;

export default PostContent;