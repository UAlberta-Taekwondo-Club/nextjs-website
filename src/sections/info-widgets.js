import React from 'react';
import { Box, Grid, Heading, Text } from 'theme-ui';

const InfoWidgets = () => {
  return (
    <Box as="section" sx={styles.infoWidgets}>
      <Grid sx={styles.infoWidgets.grid}>
        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#FF753A' }} as="h3">
            Beginners welcome
          </Heading>
          <Text as="p">Our practices are beginner-friendly. The club is the first experience with martial arts for many of our members.</Text>
        </Box>

        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#FA578E' }} as="h3">
            Social events
          </Heading>
          <Text as="p">
            Our love for regular social events is one of the many reasons that our community is so tightly knit.
            We host a range of events, from hangouts that are planned in advance to social outings that are held spontaneously after practice.
            All members are invited to these events and should be prepared to make many new friends through different activities.
          </Text>
        </Box>
        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#E682FF' }} as="h3">
            Lowest fees
          </Heading>
          <Text as="p">
            Our emphasis on community is reflected in our membership costs, and there are no additional fees nor any equipment or uniforms to purchase.
            Our goal is not to make money, but rather to have a large community of great people who all strive for athletic improvement.
            All of the fees goes back into club operations.
          </Text>
        </Box>
        <Box sx={styles.infoWidgets.box}>
          <Heading as="h3" sx={{ color: '#EF9E48', p: { lineHeight: 1, m: 0, mt: 3 } }}>
            <p>Student led</p><p> Student delivered</p><p>Student focused</p>
          </Heading>
        </Box>
        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#EF9E48' }} as="h3">
            Kicks
          </Heading>
        </Box>
        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#FA578E' }} as="h3">
            Sparring
          </Heading>
        </Box>
        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#E682FF' }} as="h3">
            Strength
          </Heading>
        </Box>
        <Box sx={styles.infoWidgets.box}>
          <Heading sx={{ color: '#FF753A' }} as="h3">
            Flexibility
          </Heading>
        </Box>
      </Grid>
    </Box>
  );
};

export default InfoWidgets;

const styles = {
  infoWidgets: {
    pt: 50,
    pb: 150, // Need to account for the `top: 50px`
    px: 50,
    display: "flex",
    '@media(max-width:1000px)': {
      pt: 0
    },
    grid: {
      display: 'grid',
      gridGap: '25px',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      '@media(max-width:1000px)': {
        gridTemplateColumns: '1fr',
        gridGap: '15px',
      },
    },
    box: {
      boxShadow: '0px 25px 100px rgba(69, 88, 157, 0.08)',
      borderRadius: '10px',
      textAlign: 'center',
      position: 'relative',
      py: "50px",
      px: "30px",
      '@media(max-width:1000px)': {
        py: "40px",
        px: "18px",
        top: '50px',
      },
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
