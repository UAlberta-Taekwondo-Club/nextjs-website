import BlockTitle from 'components/block-title';
import React from 'react';
import { Box, Container, Flex, Text } from 'theme-ui';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = ["gallery_1.jpg", "gallery_2.jpg", "gallery_3.jpg", "gallery_4.jpg", "gallery_5.jpg", "gallery_6.jpg", "gallery_7.jpg", "gallery_8.jpg", "gallery_9.jpg", "gallery_10.jpg", "gallery_11.jpg", "gallery_12.jpg", "gallery_13.jpg", "gallery_14.jpg",]



const WhatIsTkd = () => {
  return (
    <Box as="section" sx={styles.whatIsTkd}>
      <Container>
        <Flex sx={styles.whatIsTkd.row}>
          <Box sx={styles.whatIsTkd.col}>
            <AutoPlaySwipeableViews
              animateHeight
              axis="y"
              direction="decremental"
              style={styles.swipeableViews}
              slideStyle={styles.slideStyle}
            >
              {images.map((img, i) => (
                <img key={i} src={img} style={styles.img} loading="eager" />
              ))}

            </AutoPlaySwipeableViews>
          </Box>
          <Box sx={styles.whatIsTkd.col}>
            <Box sx={styles.whatIsTkd.content}>
              <BlockTitle
                sx={styles.whatIsTkd.blockTitle}
                tagline="태권도"
                heading="What is taekwondo?"
              />
              <Text as="p" sx={styles.whatIsTkd.text}>
                Taekwondo is a Korean martial art with a literal translation of "kicking" (tae), "punching" (kwon), and "the art or way of" (do).
                It is a striking martial art that utilizes both the hands and feet but generally focuses more on kicking.
                Speed, mobility, and agility are all valuable skills in Taekwondo.
                An advanced level of Taekwondo emphasizes head-height kicks, jumping and spinning kicks, and fast kicking techniques.
                The goal is to give a sense of self-esteem, knowledge of self-defense, and heightened mental and physical well-being.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default WhatIsTkd;

const styles = {
  whatIsTkd: {
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
      paddingLeft: '90px',
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
        lineHeight: 1,
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
