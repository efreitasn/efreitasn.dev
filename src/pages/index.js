import React from 'react';
import styled from 'styled-components';
import {
  Link,
  graphql
} from 'gatsby';
import Layout from 'Components/Layout';
import Logo from 'Components/Logo';
import SEOPage from 'Components/SEOPage';
import { homeSocialIconMixin } from 'Styles/mixins';
import {
  COLOR_WHITE,
  COLOR_PRIMARY
} from 'Styles/colors';
import TwitterIcon from 'Icons/Twitter';
import GithubIcon from 'Icons/Github';
import LinkedinIcon from 'Icons/Linkedin';
import PencilIcon from 'Icons/Pencil';
import EnvelopeIcon from 'Icons/Envelope';

const IndexPageWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem auto;
`;

const IndexPageStyled = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const TwitterIconStyled = styled(TwitterIcon)`
  ${homeSocialIconMixin}
`;

const GithubIconStyled = styled(GithubIcon)`
  ${homeSocialIconMixin}
`;

const LinkedinIconStyled = styled(LinkedinIcon)`
  ${homeSocialIconMixin}
`;

const PencilIconStyled = styled(PencilIcon)`
  ${homeSocialIconMixin}
`;

const EnvelopeIconStyled = styled(EnvelopeIcon)`
  ${homeSocialIconMixin}
`;

const IconGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -.5rem;

  & > a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEOPage
      title={data.site.siteMetadata.title}
      keywords={['developer']}
      withTitleTemplate={false}
    />
    <IndexPageWrapperStyled>
      <IndexPageStyled>
        <Logo
          colorTitle={COLOR_WHITE}
          fontSizeTitle="12.5rem"
          colorSubtitle={COLOR_PRIMARY}
          fontSizeSubtitle="1.6rem"
          showSubtitle={true}
        />
        <IconGroupStyled>
          <a href={data.site.siteMetadata.links.twitter} target="_blank">
            <TwitterIconStyled title="Twitter" />
          </a>
          <a href={data.site.siteMetadata.links.github} target="_blank">
            <GithubIconStyled title="Github" />
          </a>
          <a href={data.site.siteMetadata.links.linkedin} target="_blank">
            <LinkedinIconStyled title="Linkedin" />
          </a>
          <a href={data.site.siteMetadata.links.mail} target="_blank">
            <EnvelopeIconStyled title="Email" />
          </a>
          <Link to="/blog">
            <PencilIconStyled title="Blog" />
          </Link>
        </IconGroupStyled>
      </IndexPageStyled>
    </IndexPageWrapperStyled>
  </Layout>
);

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        links {
          twitter
          linkedin
          github
          mail
        }
      }
    }
  }
`;

export default IndexPage;
