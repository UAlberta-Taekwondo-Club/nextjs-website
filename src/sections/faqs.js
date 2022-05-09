import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/faqs/accordion';
import BlockTitle from 'components/block-title';
import { faqsData } from 'components/faqs/faqs.data';


const FAQs = () => {
  return (
    <Box as="section" id="faqs" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="?"
          heading="Frequently Asked Questions"
        />
        <Accordion items={faqsData} />
      </Container>
    </Box>
  );
};
export default FAQs;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};
