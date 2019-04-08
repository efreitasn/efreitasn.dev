import React, { ReactNode } from 'react';
import styled from 'styled-components';
import {
  graphql,
  useStaticQuery
} from 'gatsby';
import GlobalStyles from 'Styles/GlobalStyles';
import {
  bk1,
  bk2
} from 'Styles/breakpoints';
import LayoutFooter from './Footer';
import LayoutMain from './Main';
import LayoutHeader from './Header';

interface Props {
  children: ReactNode
};

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

const LayoutStyled = styled.div`
  margin: 4rem auto;
  max-width: 900px;
  width: 50%;

  ${bk1`
    width: 75%;
  `}

  ${bk2`
    width: 100%;
  `}
`;

export default function Layout({
  children
}: Props) {
  const { site }: LayoutQuery = useStaticQuery(layoutQuery);

  return (
    <>
      <GlobalStyles />
      <LayoutStyled>
        <LayoutHeader />
        <LayoutMain content={children} />
        <LayoutFooter
          links={[
            {
              newTab: false,
              text: 'About',
              to: '/posts/about'
            },
            {
              newTab: true,
              text: 'RSS',
              to: site.siteMetadata.feedUrl
            }
          ]}
        />
      </LayoutStyled>
    </>
  );
}