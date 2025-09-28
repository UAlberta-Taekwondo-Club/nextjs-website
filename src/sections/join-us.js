import ArrowEven from "assets/arrow-even.png";
import ArrowOdd from "assets/arrow-odd.png";
import BlockTitle from "components/block-title";
import ScrollLink, { linkStyle } from "components/scroll-link";
import React from "react";
import { getSocialMedia } from "components/banner/banner.data";
import { Box, Container, Grid, Heading, Text } from "theme-ui";

const data = [
  {
    title: "Pay the club fees",
    text: (
      <div>
        If you decide to join the club,{" "}
        <ScrollLink to="fees">pay the club fees</ScrollLink>.
      </div>
    ),
  },
  {
    title: "Connect with the club",
    text: (
      <div>
        All important announcements are sent via email. Find our social medias
        and mailing list sign up{" "}
        <a href={getSocialMedia("Linktree")} target="_blank" style={linkStyle}>
          here
        </a>
        .
      </div>
    ),
  },
  {
    title: "Welcome to the club!",
    text: (
      <div>
        Come out to club practices and events. Before each practice, please sign
        up in advance{" "}
        <a href={getSocialMedia("Linktree")} target="_blank" style={linkStyle}>
          here
        </a>
        .
      </div>
    ),
  },
];

const JoinUs = () => {
  return (
    <Box as="section" id="join-us" sx={styles.joinUs}>
      <Container>
        <a href="#join-us" style={{ textDecoration: "none" }}>
          <BlockTitle
            sx={styles.joinUs.blockTitle}
            tagline="Join us"
            heading="How to join the club?"
          />
        </a>

        <Grid gap="50px 54px" columns={3} sx={styles.joinUs.grid}>
          {data.map((item, index) => (
            <Box sx={styles.joinUs.card} key={index}>
              <Box sx={styles.joinUs.iconBox}>{`0${index + 1}`}</Box>
              <Box sx={styles.joinUs.wrapper}>
                <Heading sx={styles.joinUs.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.joinUs.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinUs;

const styles = {
  joinUs: {
    background: "linear-gradient(180deg, #EBF9FF 0%, #F6F6FF 100%)",
    position: "relative",
    py: "50px",
    "@media screen and (max-width: 1366px)": {
      pb: "80px",
    },
    "@media screen and (max-width: 992px)": {
      pb: "40px",
      paddingTop: "60px",
    },
    blockTitle: {
      marginBottom: [30, null, 55],
      textAlign: "center",
    },
    grid: {
      pt: 55,
      "@media screen and (max-width: 1366px)": {
        pt: 0,
      },
      "@media screen and (max-width: 1200px)": {
        gridGap: "50px 30px",
      },
      "@media screen and (max-width: 992px)": {
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "50px 50px",
      },
      "@media screen and (max-width: 480px)": {
        gridTemplateColumns: "repeat(1,1fr)",
        gridGap: "35px 0",
      },
    },
    card: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: '""',
        top: 0,
        left: 75,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: "center center",
        width: 215,
        height: 60,
        "@media screen and (max-width: 1366px)": {
          left: 75,
        },
        "@media screen and (max-width:1200px)": {
          display: "none",
        },
      },
      "&:nth-of-type(2n-1)::before": {
        backgroundImage: `url(${ArrowOdd})`,
      },
      "&:nth-of-type(2n)::before": {
        backgroundImage: `url(${ArrowEven})`,
        top: 17,
      },
      "&:last-child::before": {
        display: "none",
      },
    },
    iconBox: {
      width: "70px",
      height: "70px",
      borderRadius: "40%",
      backgroundColor: "white",
      display: "flex",
      alignItems: "center",
      mb: 30,
      fontSize: 30,
      fontWeight: 700,
      justifyContent: "center",
      color: "black",
      boxShadow: "0px 14px 20px rgba(76, 119, 171, 0.1)",
      "@media screen and (max-width: 560px)": {
        width: "50px",
        height: "50px",
        fontSize: 24,
        borderRadius: 20,
        mb: 25,
      },
      "@media screen and (max-width: 480px)": {
        mb: 20,
      },
    },
    wrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      mt: "-5px",
      title: {
        fontSize: 22,
        color: "black",
        lineHeight: 1.55,
        fontWeight: 500,
        mb: "15px",
        "@media screen and (max-width: 1200px)": {
          fontSize: 20,
          lineHeight: 1.4,
        },
        "@media screen and (max-width: 480px)": {
          fontSize: "18px",
          lineHeight: 1.45,
          mb: "10px",
        },
      },
      subTitle: {
        fontSize: "15px",
        fontWeight: 400,
        lineHeight: "1.73",
        color: "#343D48",
        "@media screen and (max-width: 480px)": {
          fontSize: "15px",
          lineHeight: "1.85",
        },
      },
    },
  },
};
