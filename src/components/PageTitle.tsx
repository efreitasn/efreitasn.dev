import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

const PageTitle = styled.h1`
  font-size: 2.8rem;
  line-height: 3.6rem;
  font-weight: 700;
  padding: 0 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: justify;

  ${bk2`
    padding: 0 2rem;
  `}
`;

export default PageTitle;