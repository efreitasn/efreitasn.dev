import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from 'Components/layout';
import HomeTitle from 'Components/HomeTitle';
import HomeWrapper from 'Components/HomeWrapper';
import SEO from 'Components/seo';
import Helmet from 'react-helmet';
import HomeDescription from 'Components/HomeDescription';

const IndexPageStyled = styled.div`
  margin: 5rem 2rem;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Helmet
      link={[
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Halant:700|Sedgwick+Ave'
        }
      ]}
    />
    <IndexPageStyled>
      <HomeWrapper>
        <HomeTitle
          title={data.site.siteMetadata.title}
        />
        <HomeDescription description={data.site.siteMetadata.description} />
        {/* <Link to="/page-2/">Go to page 2</Link> */}
      </HomeWrapper>
    </IndexPageStyled>
  </Layout>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`;

export default IndexPage;
