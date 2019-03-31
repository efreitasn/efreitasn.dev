import * as React from 'react';
import styled from 'styled-components';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import Logo from 'Components/Logo';
import { COLOR_GREY_3 } from 'Styles/colors';
import GlobalStyles from 'Styles/GlobalStyles';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';
import {
  shadow1
} from 'Styles/shadows';
import Link from 'Components/Link';

interface Props {
  children: React.ReactNode
};

const LayoutWrapperStyled = styled.div`
  width: 50%;
  margin: 4rem auto;

  ${bk1`
    width: 75%;
  `}

  ${bk2`
    width: 100%;
  `}
`;

const LayoutHeader = styled.header`
  margin: 0 auto .5rem auto;
  width: 70%;
`;

const LayoutMain = styled.main`
  background-color: #FFFFFF;
  border-radius: 15px;
  box-shadow: ${shadow1};
  /* overflow because of the border-radius */
  overflow: hidden;

  ${bk2`
    border-radius: 0;
  `}
`;

const LayoutFooter = styled.footer`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  justify-content: flex-end;
  margin-top: 2.5rem;
  padding: 0 1.5rem;

  & > div:first-child {
    margin-bottom: 5px;
  }
`;

const LayoutFooterBy = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
  color: ${COLOR_GREY_3};
`;

type LayoutQuery = {
  site: {
    siteMetadata: {
      links: {
        gitRepo: string
      }
    }
  }
};

const layoutQuery = graphql`
  {
    site {
      siteMetadata {
        links {
          gitRepo
        }
      }
    }
  }
`;

function Layout({ children }: Props) {
  const { site }: LayoutQuery = useStaticQuery(layoutQuery);

  return (
    <>
      <GlobalStyles />
      <LayoutWrapperStyled>
        <LayoutHeader>
          <Link to="/">
            <Logo />
          </Link>
        </LayoutHeader>
        <LayoutMain>
          {children}
        </LayoutMain>
        <LayoutFooter>
          <div>
            <Link
              to={site.siteMetadata.links.gitRepo}
              rel="noopener noreferrer"
              target="_blank"
            >View on Github</Link>
          </div>
          <div>
            <LayoutFooterBy>By</LayoutFooterBy>
            <Link to="/about">Emanuel</Link>
          </div>
        </LayoutFooter>
      </LayoutWrapperStyled>
    </>
  );
}

export default Layout;