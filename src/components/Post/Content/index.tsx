import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

const PostContent = styled.div`
  line-height: 3.2rem;
  text-align: justify;

  & > p {
    margin: 1rem 0;
    padding: 0 4rem;

    ${bk2`
      padding: 0 2rem;
    `}
  }

  & > blockquote {
    background-color: var(--color-bodyBg);
    border-radius: 10px;
    color: var(--color-otherText);
    margin: 2rem 4rem;
    padding: 1.5rem 2.5rem;
    ${({ theme }) => theme.transitions.bg ? `transition: ${theme.transitions.bg};` : ''};

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