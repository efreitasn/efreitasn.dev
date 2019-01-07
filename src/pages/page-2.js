import React from 'react';
import { Link } from 'gatsby';

import Layout from 'Components/Layout';
import SEOPage from 'Components/SEOPage';

const SecondPage = () => (
  <Layout>
    <SEOPage title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
