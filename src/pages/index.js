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
import MediumIcon from 'Icons/Medium';
import CodepenIcon from 'Icons/Codepen';
import LinksList from 'Components/LinksList';
import { bk2 } from 'Styles/breakpoints';

const IndexPageStyled = styled.div`
  margin: 5rem auto;
  width: 85%;

  ${bk2`
    margin-top: 3rem;
    width: 100%;
  `}
`;

const LogoWrapperStyled = styled.div`
  ${bk2`
    padding: 0 3rem;
  `}
  margin-bottom: 1.5rem;
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

const MediumIconStyled = styled(MediumIcon)`
  ${homeSocialIconMixin}
`;

const CodepenIconStyled = styled(CodepenIcon)`
  ${homeSocialIconMixin}
`;

const IconGroupStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;

  ${bk2`
    display: none;
  `}

  & > a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const LinksListWrapperStyled = styled.div`
  display: none;

  ${bk2`
    display: block;
  `}
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEOPage
      title={data.site.siteMetadata.title}
      keywords={['developer']}
      withTitleTemplate={false}
    />
    <IndexPageStyled>
      <LogoWrapperStyled>
        <Logo
          colorTitle={COLOR_WHITE}
          colorSubtitle={COLOR_PRIMARY}
          showSubtitle={true}
        />
      </LogoWrapperStyled>
      <IconGroupStyled>
        <a href={data.site.siteMetadata.links.linkedin} target="_blank">
          <LinkedinIconStyled title="Linkedin" />
        </a>
        <a href={data.site.siteMetadata.links.twitter} target="_blank">
          <TwitterIconStyled title="Twitter" />
        </a>
        <a href={data.site.siteMetadata.links.github} target="_blank">
          <GithubIconStyled title="Github" />
        </a>
        <a href={data.site.siteMetadata.links.mail} target="_blank">
          <EnvelopeIconStyled title="Email" />
        </a>
        <a href={data.site.siteMetadata.links.medium} target="_blank">
          <MediumIconStyled title="Medium" />
        </a>
        <a href={data.site.siteMetadata.links.codepen} target="_blank">
          <CodepenIconStyled title="Codepen" />
        </a>
        <Link to="/blog">
          <PencilIconStyled title="Blog" />
        </Link>
      </IconGroupStyled>
      <LinksListWrapperStyled>
        <LinksList
          links={[
            {
              label: 'Blog',
              url: '/blog',
              icon: <PencilIconStyled title="Blog" />
            },
            {
              label: 'Linkedin',
              url: data.site.siteMetadata.links.linkedin,
              icon: <LinkedinIconStyled title="Linkedin" />
            },
            {
              label: 'Twitter',
              url: data.site.siteMetadata.links.twitter,
              icon: <TwitterIconStyled title="Twitter" />
            },
            {
              label: 'Github',
              url: data.site.siteMetadata.links.github,
              icon: <GithubIconStyled title="Github" />
            },
            {
              label: 'Email',
              url: data.site.siteMetadata.links.mail,
              icon: <EnvelopeIconStyled title="Email" />
            },
            {
              label: 'Medium',
              url: data.site.siteMetadata.links.medium,
              icon: <MediumIconStyled title="Medium" />
            },
            {
              label: 'Codepen',
              url: data.site.siteMetadata.links.codepen,
              icon: <CodepenIconStyled title="Codepen" />
            },
          ]}
        />
      </LinksListWrapperStyled>
    </IndexPageStyled>
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
          medium
          codepen
        }
      }
    }
  }
`;

export default IndexPage;
