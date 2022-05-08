import React from 'react';
import { Box, Grid, Heading, Text } from 'theme-ui';

const CtaThree = () => {
  return (
    <Box as="section" sx={styles.ctaThree}>
      <Grid sx={styles.ctaThree.grid}>
        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#FF753A' }} as="h3">
            Beginners welcome
          </Heading>
          <Text as="p">Our practices are very beginner friendly, and for many members, it's their first time trying martial arts.</Text>
        </Box>

        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#FA578E' }} as="h3">
            Social events
          </Heading>
          <Text as="p">
            Our club is a great way to meet new people from across campus at both our practices and at the many social events we host throughout the year.
          </Text>
        </Box>
        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#E682FF' }} as="h3">
            Lowest fees
          </Heading>
          <Text as="p">
            Our fees are priced very low, making martial arts more accessible for everyone. There are no additional fees nor any equipment or uniforms to purchase.
          </Text>
        </Box>
        <Box sx={styles.ctaThree.box}>
          <Heading as="h3" sx={{ color: '#EF9E48', p: { lineHeight: 1, m: 0, mt: 3 } }}>
            <p>Student led</p><p> Student delivered</p><p>Student focused</p>
          </Heading>
        </Box>
        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#EF9E48' }} as="h3">
            Kicks
          </Heading>
        </Box>
        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#FA578E' }} as="h3">
            Sparring
          </Heading>
        </Box>
        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#E682FF' }} as="h3">
            Strength
          </Heading>
        </Box>
        <Box sx={styles.ctaThree.box}>
          <Heading sx={{ color: '#FF753A' }} as="h3">
            Flexibility
          </Heading>
        </Box>
      </Grid>
    </Box>
  );
};

export default CtaThree;

const styles = {
  ctaThree: {
    pt: 100,
    pb: 200, // Need to account for the `top: 50px`
    px: 25,
    display: "flex",
    grid: {
      display: 'grid',
      gridGap: '45px',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      '@media(max-width:1000px)': {
        gridTemplateColumns: '1fr 1fr',
        gridGap: '20px',
      },
    },
    box: {
      boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      py: "50px",
      px: "30px",
      '&:nth-of-type(odd)': {
        top: '50px',
      },
      h3: {
        margin: 0,
        fontSize: '30px',
        lineHeight: 1,
        fontWeight: 700,
        letterSpacing: '-1.5px',
      },
      p: {
        lineHeight: 1.3,
        mt: 20
      }
    },
  },
};
