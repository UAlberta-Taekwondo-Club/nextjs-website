import { IconButton, Tooltip } from "@material-ui/core";
import BannerBG from "assets/banner-bg-1-1.png";
import BannerPattern from "assets/banner-pattern.png";
import BannerTextLine from "assets/banner-text-line.png";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, Container, Flex, Heading, Text } from "theme-ui";
import { socialMedias } from "./banner.data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  "group_1.jpg",
  "group_2.jpg",
  "group_3.jpg",
  "group_4.jpg",
  "group_5.jpg",
  "group_6.jpg",
  "group_7.jpg",
  "group_8.jpg",
];

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.content}>
              <a href="#about" style={{ textDecoration: "none" }}>
                <Heading as="h3">
                  UAlberta <br />
                  Taekwondo Club
                </Heading>
              </a>

              <Text as="p">
                The University of Alberta Taekwondo Club is one of the biggest
                clubs on campus. We are proud to have a large community that is
                welcoming and includes athletes of all skill and fitness levels.
                Our club has a wide range of members with varying degrees of
                experience and proficiency, from black belts to white belts to
                people who are not yet familiar with the belt system. We are a
                great fit for anyone who wants to improve their level of fitness
                or be involved in martial arts. Any interested athletes are
                encouraged to try our club out. We offer one free practice for
                all participants.
              </Text>
              <Box sx={styles.banner.socialMedias}>
                {socialMedias.map(({ icon, url, title }, i) => (
                  <Tooltip title={title} key={i}>
                    <IconButton href={url} target="_blank" color="inherit">
                      {icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.imageBox}>
              <Box sx={styles.banner.imageInner}>
                <AutoPlaySwipeableViews
                  animateHeight
                  axis="y"
                  direction="decremental"
                  style={styles.swipeableViews}
                >
                  {images.map((img, i) => (
                    <img key={i} src={img} loading="eager" />
                  ))}
                </AutoPlaySwipeableViews>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    overflow: "hidden",
    paddingTop: ["100px", "120px"],
    paddingBottom: ["0px", null, "80px"],
    backgroundImage: [
      "linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)",
      `url(${BannerBG})`,
    ],
    backgroundPosition: "left top",
    backgroundRepeat: "no-repeat",
    container: {
      maxWidth: ["100%", null, null, null, null, "1240px", "1440px"],
    },
    row: {
      flexWrap: "wrap",
      display: "flex",
      marginLeft: "-15px",
      marginRight: "-15px",
    },
    col: {
      pl: "15px",
      pr: "15px",
      flex: ["1 1 100%", null, "0 0 50%"],
    },
    content: {
      paddingRight: [0, 0, 0, 0, "40px", 0, 0],
      h3: {
        lineHeight: 1.18,
        color: "black",
        fontWeight: "bold",
        position: "relative",
        width: "100%",
        fontSize: ["28px", "35px", null, "45px", null, "50px", "65px"],
        maxWidth: ["500px", null, null, null, null, null, "100%"],
        "&:before": {
          content: '""',
          width: ["290px", null, null, null, null, "260px", "381px"],
          height: "15px",
          backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: "center center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          bottom: "-15px",
          right: ["15px", null, null, null, null, "140px", "100px"],
          display: ["none", null, null, null, null, "block"],
        },
      },
      p: {
        lineHeight: 2.33,
        color: "#02073E",
        marginTop: ["10px", null, null, "35px"],
        fontSize: ["15px", "18px"],
        pr: ["15px", 0],
        br: {
          display: ["none", null, null, null, null, "block"],
        },
      },
    },
    socialMedias: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginTop: "20px",
      color: "#3fdbb1",
    },
    imageBox: {
      display: "flex",
      justifyContent: ["flex-start", null, null, "flex-end"],
      marginTop: ["60px", null, null, "0"],
    },
    imageInner: {
      position: "relative",
      "&:before": {
        content: '""',
        width: "100%",
        height: "100%",
        border: "2px solid #FFDC6B",
        borderRadius: "5px",
        top: "30px",
        left: "30px",
        position: "absolute",
        zIndex: 2,
        display: ["none", null, "block"],
        "@media(max-width: 991px)": {
          left: "10px",
          top: "15px",
          height: "calc(100% - 15px)",
        },
      },
      "&:after": {
        content: '""',
        width: "302px",
        height: "347px",
        backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: "center",
        top: "-30px",
        right: "-73px",
        position: "absolute",
        zIndex: 1,
        "@media(max-width: 991px)": {
          right: "-10px",
        },
      },
      img: {
        display: "flex",
        position: "relative",
        zIndex: 9,
        maxWidth: "100%",
      },
    },
  },
  swipeableViews: {
    borderRadius: "10px",
    position: "relative",
    zIndex: 9,
  },
};
