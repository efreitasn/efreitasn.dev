import React from 'react';
import styled from'styled-components';
import SEOPage from 'Components/SEO/Page';
import {
  COLOR_GREY_2,
  COLOR_GREY_3
} from 'Styles/colors';

const NotFoundPageStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 6rem 5rem;
  justify-content: flex-end;
`;

const SadSpan = styled.span`
  color: ${COLOR_GREY_2};
  font-size: 4rem;
  margin-top: -1rem;
  font-weight: bold;
`;

const MessageStyled = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${COLOR_GREY_3};
  margin-right: 2rem;
  text-transform: uppercase;
`;

const NotFoundPage = () => (
  <>
    <SEOPage
      title="Not found"
      indexPage={false}
    />
    <NotFoundPageStyled>
      <MessageStyled>404</MessageStyled>
      <SadSpan aria-hidden="true">:(</SadSpan>
    </NotFoundPageStyled>
  </>
);

export default NotFoundPage;