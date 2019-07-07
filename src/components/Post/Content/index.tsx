import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

const PostContent = styled.div`
  line-height: 3.2rem;
  padding: 0 4rem;
  text-align: justify;

  ${bk2`
    padding: 0 2rem;
    line-height: 3.2rem;
  `}

  & > * {
    margin: 3rem 0 0;

    ${bk2`
      margin: 4rem 0 0;
    `}
  }

  & > p {
    /*
      margin-top & margin-bottom because of line-height.
    */
    margin-top: 2.1rem;
    margin-bottom: -.9rem;

    ${bk2`
      margin-top: 3rem;
      margin-bottom: -1.5rem;
    `}
  }

  & > blockquote {
    color: var(--color-otherText);

    & > p {
      border-left: 4px solid var(--color-bodyBg);
      padding: 1rem 2rem;

      ${({ theme }) => theme.transitions.bgBorder ? `transition: ${theme.transitions.bgBorder};` : ''};
    }
  }

  & .gatsby-resp-image-link, & .gatsby-resp-image-figure {
    margin: 5rem 0;
  }

  & .gatsby-resp-image-figcaption {
    color: var(--color-otherText);
    font-size: 1.4rem;
    line-height: 1.4;
    margin-top: 1.5rem;
    padding: 0 2rem;
    text-align: center;
  }

  & .gatsby-resp-image-figure > .gatsby-resp-image-link {
    margin: 0;
  }
`;

export default PostContent;
