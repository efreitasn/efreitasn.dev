import React from 'react';
import { graphql } from 'gatsby';
import PageTitle from 'Components/PageTitle';
import Link from 'Components/Link';
import PageContent from 'Components/PageContent';
import SEOPage from 'Components/SEO/Page';

const About = ({
  data
}) => {
  const { links } = data.site.siteMetadata;

  return (
    <>
      <SEOPage
        title="About"
        description="About efreitasn."
        keywords={[
          'dev',
          'frontend'
        ]}
      />
      <div>
        <PageTitle>About</PageTitle>
        <PageContent>
          <p>
            Hi. My name's Emanuel and I'm a front-end developer. You can find me on <Link
              target="_blank"
              to={links.twitter}
              rel="noopener noreferrer"
            >Twitter</Link> and <Link
              to={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >Github</Link> or <Link
              to={links.mail}
              target="_blank"
              rel="noopener noreferrer"
            >send me an email</Link>.
          </p>
        </PageContent>
      </div>
    </>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        links {
          twitter
          github
          mail
        }
      }
    }
  }
`;

export default About;