import styled from 'styled-components';

const PageContent = styled.div`
  margin-bottom: 2.5rem;
  line-height: 2.4rem;
  text-align: justify;

  & > p {
    padding: 0 4rem;
  }

  & > p:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default PageContent;