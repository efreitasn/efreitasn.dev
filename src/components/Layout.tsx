import * as React from 'react';
import styled from 'styled-components';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import Logo from 'Components/Logo';
import GlobalStyles from 'Styles/GlobalStyles';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';
import {
  shadow1
} from 'Styles/shadows';
import { COLOR_GREY_2 } from 'Styles/colors';
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
  font-size: 1.4rem;
  justify-content: flex-end;
  margin-top: 2.5rem;
  padding: 0 1.5rem;

  & > div:first-child {
    margin-bottom: 5px;
  }
`;

const LayoutFooterSplitter = styled.span.attrs({
  children: '/'
})`
  color: ${COLOR_GREY_2};
  margin: 0 1rem;
`;

type LayoutQuery = {
  site: {
    siteMetadata: {
      feedUrl: string
    }
  }
};

const layoutQuery = graphql`
  {
    site {
      siteMetadata {
        feedUrl
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
          <Link
            to={site.siteMetadata.feedUrl}
            rel="noopener noreferrer"
            target="_blank"
          >RSS</Link>
          <LayoutFooterSplitter />
          <Link to="/about">About</Link>
        </LayoutFooter>
      </LayoutWrapperStyled>
    </>
  );
}

export default Layout;