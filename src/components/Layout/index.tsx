import React, {
  ReactNode,
  useState,
  useEffect
} from 'react';
import styled, { ThemeProvider } from 'styled-components';
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

import DarkModeToggle from './DarkModeToggle';
import {
  firstRenderTheme,
  subsequentRendersTheme
} from './themes';
import useDark from './useDark';

interface Props {
  children: ReactNode;
}

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
  const [theme, setTheme] = useState(firstRenderTheme);
  const [isDark, toggleIsDark] = useDark();

  useEffect(
    () => setTheme(subsequentRendersTheme),
    []
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <DarkModeToggle
            isDark={isDark}
            toggleIsDark={toggleIsDark}
          />
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
      </ThemeProvider>
    </>
  );
}