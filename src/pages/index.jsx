import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
// Components
import IconLinksGroup from 'Components/IconLinksGroup';
import IconLinksList from 'Components/IconLinksList';
import Layout from 'Components/Layout';
import Logo from 'Components/Logo';
import SEOPage from 'Components/SEOPage';
// Icons
import CodepenIcon from 'Icons/Codepen';
import EnvelopeIcon from 'Icons/Envelope';
import GithubIcon from 'Icons/Github';
import LinkedinIcon from 'Icons/Linkedin';
import MediumIcon from 'Icons/Medium';
import PencilIcon from 'Icons/Pencil';
import TwitterIcon from 'Icons/Twitter';
// Styles
import { homeLogoAnimation } from 'Styles/animations';
import { bk2 } from 'Styles/breakpoints';
import {
  COLOR_WHITE,
  COLOR_PRIMARY
} from 'Styles/colors';
import { homeSocialIconMixin } from 'Styles/mixins';

const IndexPageStyled = styled.div`
  margin: 5rem auto;
  width: 85%;

  ${bk2`
    margin-top: 3rem;
    width: 100%;
  `}
`;

const LogoWrapperStyled = styled.div`
  animation-delay: .3s;
  animation-duration: .5s;
  animation-name: ${homeLogoAnimation};
  animation-fill-mode: forwards;
  transform: translateY(-200%);

  ${bk2`
    padding: 0 3rem;
  `}
  margin-bottom: 1.5rem;
`;

const IconLinksGroupWrapperStyled = styled.div`
  ${bk2`
    display: none;
  `}
`;

const IconLinksListWrapperStyled = styled.div`
  display: none;

  ${bk2`
    display: block;
  `}
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

const IndexPage = ({ data }) => {
  const linksData = [
    {
      label: 'Blog',
      url: '/blog',
      icon: <PencilIconStyled title="Blog" />
    },
    {
      label: 'Github',
      url: data.site.siteMetadata.links.github,
      icon: <GithubIconStyled title="Github" />
    },
    {
      label: 'Twitter',
      url: data.site.siteMetadata.links.twitter,
      icon: <TwitterIconStyled title="Twitter" />
    },
    {
      label: 'Linkedin',
      url: data.site.siteMetadata.links.linkedin,
      icon: <LinkedinIconStyled title="Linkedin" />
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
  ];

  return (
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
        <IconLinksGroupWrapperStyled>
          <IconLinksGroup
            iconLinks={[...linksData].reverse()}
            itemAnimationDurationS={0.3}
            animationDelayS={0.5}
          />
        </IconLinksGroupWrapperStyled>
        <IconLinksListWrapperStyled>
          <IconLinksList
            iconLinks={linksData}
            itemAnimationDurationS={0.4}
            animationDelayS={0.5}
          />
        </IconLinksListWrapperStyled>
      </IndexPageStyled>
    </Layout>
  );
};

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
