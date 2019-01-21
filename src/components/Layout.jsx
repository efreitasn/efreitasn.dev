import React from 'react';
import {
  graphql,
  StaticQuery
} from 'gatsby';
import PropTypes from 'prop-types';
import {
  Spring,
  animated
} from 'react-spring';
import styled from 'styled-components';
import Logo from 'Components/Logo';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_SECONDARY
} from 'Styles/colors';
import GlobalStyles from 'Styles/GlobalStyles';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';
import {
  layoutFooterIconMixin
} from 'Styles/mixins';
import {
  shadow1
} from 'Styles/shadows';
import Link from 'Components/Link';
// Icons
import LinkedinIcon from 'Icons/Linkedin';
import EnvelopeIcon from 'Icons/Envelope';
import GithubIcon from 'Icons/Github';
import TwitterIcon from 'Icons/Twitter';
import CodepenIcon from 'Icons/Codepen';
import MediumIcon from 'Icons/Medium';

const LayoutWrapperStyled = styled.div`
  width: 50%;
  margin: 0 auto;
  overflow-x: hidden;

  ${bk1`
    width: 75%;
  `}

  ${bk2`
    width: 100%;
  `}
`;

const LayoutHeader = styled.header`
  margin: 4rem auto 2rem auto;
  width: 70%;
`;

const LayoutContent = styled.main`
  background-color: #FFFFFF;
  border-radius: 15px;
  /* Put overflow because of the border-radius */
  overflow-x: hidden;
`;

const LayoutFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 4rem;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const FooterLink = styled(Link)`
  color: ${COLOR_PRIMARY};
  transition: color .2s ease;   

  &:hover {
    color: ${COLOR_PRIMARY_DARK};
    transform: scale(2);
  }

  &:not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const LinkedinIconStyled = styled(LinkedinIcon)`
  ${layoutFooterIconMixin}
`;

const GithubIconStyled = styled(GithubIcon)`
  ${layoutFooterIconMixin}
`;

const TwitterIconStyled = styled(TwitterIcon)`
  ${layoutFooterIconMixin}
`;

const MediumIconStyled = styled(MediumIcon)`
  ${layoutFooterIconMixin}
`;

const CodepenIconStyled = styled(CodepenIcon)`
  ${layoutFooterIconMixin}
`;

const EnvelopeIconStyled = styled(EnvelopeIcon)`
  ${layoutFooterIconMixin}
`;

const query = graphql`
  {
    site {
      siteMetadata {
        links {
          twitter
          github
          mail
          medium
          codepen
          linkedin
        }
      }
    }
  }
`;

const LayoutHeaderAnimated = animated(LayoutHeader);

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => {
      const icons = [
        {
          icon: <MediumIconStyled title="Medium" />,
          url: data.site.siteMetadata.links.medium
        },
        {
          icon: <CodepenIconStyled title="Codepen" />,
          url: data.site.siteMetadata.links.codepen
        },
        {
          icon: <LinkedinIconStyled title="Linkedin" />,
          url: data.site.siteMetadata.links.linkedin
        },
        {
          icon: <EnvelopeIconStyled title="Email" />,
          url: data.site.siteMetadata.links.mail
        },
        {
          icon: <GithubIconStyled title="Github" />,
          url: data.site.siteMetadata.links.github
        },
        {
          icon: <TwitterIconStyled title="Twitter" />,
          url: data.site.siteMetadata.links.twitter
        },
      ];

      return (
        <>
          <GlobalStyles />
          <LayoutWrapperStyled>
            <Spring
              from={{
                transform: 'translateY(-200%)'
              }}
              to={{
                transform: 'translateY(0)'
              }}
              native={true}
            >
              {props => (
                <LayoutHeaderAnimated style={props}>
                  <Logo
                    colorTitle={COLOR_PRIMARY}
                    colorSubtitle={COLOR_SECONDARY}
                    showSubtitle={true}
                  />
                </LayoutHeaderAnimated>
              )}
            </Spring>
            <Spring
              delay={200}
              from={{
                opacity: '0'
              }}
              to={{
                opacity: '1'
              }}
              after={{
                boxShadow: shadow1
              }}
            >
              {props => (
                <LayoutContent style={props}>
                  {children}
                </LayoutContent>
              )}
            </Spring>
            <LayoutFooter>
              <Spring
                from={{
                  transform: 'translateX(100%)'
                }}
                to={{
                  transform: 'translateX(0)'
                }}
              >
                {props => (
                  <div style={props}>
                    {icons.map(({
                      icon,
                      url
                    }) => (
                      <FooterLink key={url} to={url} target="_blank">
                        {icon}
                      </FooterLink>
                    ))}
                  </div>
                )}
              </Spring>
            </LayoutFooter>
          </LayoutWrapperStyled>
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;