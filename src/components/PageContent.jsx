import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

const PageContent = styled.div`
  margin-bottom: 3rem;
  line-height: 2.4rem;
  text-align: justify;

  & > p {
    padding: 0 4rem;

    ${bk2`
      padding: 0 2rem
    `}
  }

  & > p:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default PageContent;