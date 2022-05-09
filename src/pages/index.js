import Layout from 'components/layout';
import SEO from 'components/seo';
import { StickyProvider } from 'contexts/app/app.provider';
import React from 'react';
import About from 'sections/about';
import AnyQuestions from 'sections/any-questions';
import FAQs from 'sections/faqs';
import Fees from 'sections/fees';
import JoinUs from 'sections/join-us';
import theme from 'theme';
import { ThemeProvider } from 'theme-ui';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <About />
          <JoinUs />
          <Fees />
          <FAQs />
          <AnyQuestions />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
