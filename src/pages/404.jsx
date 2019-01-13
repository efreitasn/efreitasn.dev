import React from 'react';
import styled from'styled-components';
import Layout from 'Components/Layout';
import SEOPage from 'Components/SEOPage';
import {
  COLOR_PRIMARY,
  // COLOR_PRIMARY_DARK
} from 'Styles/colors';

const NotFoundPageStyled = styled.div`
  text-align: center;
`;

const SadSpan = styled.span`
  color: ${COLOR_PRIMARY};
  display: inline-block;
  font-size: 22rem;
  transform: rotate(90deg);
`;

// const MessageStyled = styled.div`
//   font-size: 2.4rem;
//   font-weight: 700;
//   color: ${COLOR_PRIMARY_DARK};
//   text-transform: uppercase;
// `;

const NotFoundPage = () => (
  <Layout>
    <SEOPage
      title="Not found"
      indexPage={false}
    />
    <NotFoundPageStyled>
      <SadSpan>:(</SadSpan>
      {/* <MessageStyled>Home page</MessageStyled> */}
    </NotFoundPageStyled>
  </Layout>
);

export default NotFoundPage;
