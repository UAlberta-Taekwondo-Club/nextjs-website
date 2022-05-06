import BannerBG from 'assets/banner-bg-1-1.png';
import BannerImage from 'assets/banner-image-1.png';
import BannerPattern from 'assets/banner-pattern.png';
import BannerTextLine from 'assets/banner-text-line.png';
import VideoBtn from 'components/video-btn';
import React from 'react';
import {
  Box, Container, Flex, Heading, Image, Text
} from 'theme-ui';
import { SiDiscord, SiYoutube, SiLinktree } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import { RiInstagramFill } from "react-icons/ri"
import { IconButton, Tooltip } from '@material-ui/core';

const socialMedias = [{
  "title": "Email crtkd@ualberta.ca",
  "url": "mailto:crtkd@ualberta.ca",
  "icon": <MdEmail />,
},
{
  "title": "Instagram @ua_taekwondo",
  "url": "https://www.instagram.com/ua_taekwondo/",
  "icon": <RiInstagramFill />,
},
{
  "title": "Youtube",
  "url": "https://www.youtube.com/channel/UCF9sw7YeFE9mbM-POCMie7g",
  "icon": <SiYoutube />,
},
{
  "title": "Discord",
  "url": "https://discord.gg/z3atcrMWGX",
  "icon": <SiDiscord />,
},
{
  "title": "Linktree",
  "url": "https://linktr.ee/ua_tkd",
  "icon": <SiLinktree />,
}
]



const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.content}>
              <Heading as="h3">
                UAlberta <br />
                Taekwondo Club
              </Heading>
              <Text as="p">
                The University of Alberta Taekwondo Club is a community that is eager to include athletes of all skills and fitness levels. We are proud to have a wide range of members with varying degrees of experience and proficiency, from black belts to white belts to people who are not yet familiar with the belt system.
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
                <Image src={BannerImage} alt="banner image" />
                <VideoBtn path="L9jU-IIN0ng" />
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
    overflowX: 'hidden',
    paddingTop: ['100px', '120px'],
    paddingBottom: ['0px', null, '80px'],
    backgroundImage: [
      'linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)',
      `url(${BannerBG})`,
    ],
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    container: {
      maxWidth: ['100%', null, null, null, null, '1240px', '1440px'],
    },
    row: {
      flexWrap: 'wrap',
      display: 'flex',
      marginLeft: '-15px',
      marginRight: '-15px',
    },
    col: {
      pl: '15px',
      pr: '15px',
      flex: ['1 1 100%', null, '0 0 50%'],
    },
    content: {
      paddingRight: [0, 0, 0, 0, '40px', 0, 0],
      h3: {
        lineHeight: 1.18,
        color: 'black',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%',
        fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
        maxWidth: ['500px', null, null, null, null, null, '100%'],
        '&:before': {
          content: '""',
          width: ['290px', null, null, null, null, '260px', '381px'],
          height: '15px',
          backgroundImage: `url(${BannerTextLine})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          bottom: '-15px',
          right: ['15px', null, null, null, null, '140px', '100px'],
          display: ['none', null, null, null, null, 'block'],
        },
      },
      p: {
        lineHeight: 2.33,
        color: '#02073E',
        marginTop: ['10px', null, null, '35px'],
        fontSize: ['15px', '18px'],
        pr: ['15px', 0],
        br: {
          display: ['none', null, null, null, null, 'block'],
        },
      },
    },
    socialMedias: {
      display: 'flex',
      flexDirection: ['column', null, null, null, null, 'row'],
      alignItems: ['flex-start', null, null, null, null, 'center'],
      color: 'rgba(2, 7, 62,.6)',
      fontSize: ['15px', null, '16px'],
      marginTop: "20px",
      color: "#3fdbb1"
    },
    imageBox: {
      display: 'flex',
      justifyContent: ['flex-start', null, null, 'flex-end'],
      marginTop: ['60px', null, null, '0'],
    },
    imageInner: {
      position: 'relative',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        border: '2px solid #FFDC6B',
        borderRadius: '5px',
        top: '30px',
        left: '30px',
        position: 'absolute',
        zIndex: 2,
        display: ['none', null, 'block'],
        '@media(max-width: 991px)': {
          left: '10px',
          top: '15px',
          height: 'calc(100% - 15px)',
        },
      },
      '&:after': {
        content: '""',
        width: '302px',
        height: '347px',
        backgroundImage: `url(${BannerPattern})`,
        backgroundPosition: 'center',
        top: '-30px',
        right: '-73px',
        position: 'absolute',
        zIndex: 1,
        '@media(max-width: 991px)': {
          right: '-10px',
        },
      },
      img: {
        position: 'relative',
        zIndex: 9,
        maxWidth: '100%',
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 10,
      },
    },
  },
};
