import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

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
    background-color: ${({ theme }) => theme.colors.bodyBg};
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.otherText};
    margin: 2rem 4rem;
    padding: 1.5rem 2.5rem;
    transition: ${({ theme }) => theme.transitions.bg};

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