import BlockTitle from 'components/block-title';
import React from 'react';
import { Box, Container, Flex, Text } from 'theme-ui';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, virtualize } from 'react-swipeable-views-utils';
import Gallery1 from "assets/gallery_1.jpg"
import Gallery2 from "assets/gallery_2.jpg"
import Gallery3 from "assets/gallery_3.jpg"
import Gallery4 from "assets/gallery_4.jpg"
import Gallery5 from "assets/gallery_5.jpg"
import Gallery6 from "assets/gallery_6.jpg"
import Gallery7 from "assets/gallery_7.jpg"
import Gallery8 from "assets/gallery_8.jpg"
import Gallery9 from "assets/gallery_9.jpg"
import Gallery10 from "assets/gallery_10.jpg"
import Gallery11 from "assets/gallery_11.jpg"
import Gallery12 from "assets/gallery_12.jpg"
import Gallery13 from "assets/gallery_13.jpg"
import Gallery14 from "assets/gallery_14.jpg"

const AutoPlaySwipeableViews = autoPlay(virtualize(SwipeableViews));

const images = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6, Gallery7, Gallery8, Gallery9, Gallery10, Gallery11, Gallery12, Gallery13, Gallery14]

function slideRenderer({ index, key }) {
  const i = Math.abs(index % images.length)
  return <img key={key} src={images[i]} style={styles.img} />
}

const CtaTwo = () => {
  return (
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <AutoPlaySwipeableViews
              animateHeight
              axis="y"
              slideRenderer={slideRenderer}
              direction="decremental"
              style={styles.swipeableViews}
              slideStyle={styles.slideStyle}
            />
          </Box>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                sx={styles.ctaTwo.blockTitle}
                tagline="태권도"
                heading="What is taekwondo?"
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                Taekwondo is a Korean martial art with a literal translation of "kicking" (tae), "punching" (kwon), and "the art or way of" (do).
                It emphasizes head-height kicks, jumping and spinning kicks, and fast kicking techniques.
                The goal is to give a sense of self-esteem, knowledge of self-defense, and heightened mental and physical well-being.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaTwo;

const styles = {
  ctaTwo: {
    paddingBottom: '100px',
    '@media(min-width: 1200px)': {
      paddingTop: '100px',
    },
    '@media(max-width:1024px)': {
      paddingBottom: 80,
    },
    row: {
      flexWrap: 'wrap',
    },
    col: {
      flex: '0 0 50%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
    },
    content: {
      paddingLeft: '95px',
      '@media(max-width:1024px)': {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      },
      '@media(max-width:575px)': {
        maxWidth: '91%',
      },
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['24px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['-0.5px', null, null, '-1.5px'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
      '@media(max-width:1024px)': {
        marginTop: "40px"
      },
    },
    text: {
      fontSize: [15, null, null, 18],
      lineHeight: 2.33,
      color: 'black',
      marginBottom: 25,
      mb: [20, null, null, null, null],
      whiteSpace: ['normal', null, null, null, 'pre-line'],
    },
  },
  swipeableViews: {
    display: "flex",
    overflow: "hidden",
    borderRadius: "10px",
    width: "100%",

  },
  img: {
    display: "flex",
    height: "390px",
    borderRadius: "10px",
  },
  slideStyle: {
    display: "flex",
    '@media(minWidth:1024px)': {
      justifyContent: "center",
    },
  }
};
