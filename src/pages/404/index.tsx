import React from 'react';
import styled from 'styled-components';
import SEO from 'Components/SEO';
import NotFoundPageSadSpan from './SadSpan';
import NotFoundPageMessage from './Message';

const NotFoundPageStyled = styled.div`
  align-items: center;
  display: flex;
  padding: 6rem 5rem;
  justify-content: flex-end;
`;

const NotFoundPage = () => (
  <>
    <SEO
      title="Not found"
      description="Page not found"
      index={false}
    />
    <NotFoundPageStyled>
      <NotFoundPageMessage>404</NotFoundPageMessage>
      <NotFoundPageSadSpan aria-hidden="true">:(</NotFoundPageSadSpan>
    </NotFoundPageStyled>
  </>
);

export default NotFoundPage;