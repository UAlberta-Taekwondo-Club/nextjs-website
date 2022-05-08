import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import CtaOne from 'sections/cta-one';
import FAQ from 'sections/faq';
import CtaTwo from 'sections/cta-two';
import WorkFlow from 'sections/workflow';
import Pricing from 'sections/pricing';
import CtaThree from 'sections/cta-three';
import FavoriteCourse from 'sections/favorite-course';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO />
          <div id="about">
            <Banner />
            {/* <FavoriteCourse /> */}
            <CtaThree />
            <CtaTwo />
          </div>

          <WorkFlow />
          <Pricing />
          <FAQ />
          <CtaOne />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
