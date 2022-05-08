import FavoriteCard from 'components/favorite-card';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container } from 'theme-ui';

const favoriteCourseData = [
  {
    title: 'Education Room GB-23',
    iframe: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3595.145415543234!2d-113.52645163433893!3d53.523633625372455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x860f638fe3e70d01!2sUniversity%20of%20Alberta%20Faculty%20of%20Education!5e0!3m2!1sen!2sca!4v1651941683045!5m2!1sen!2sca",
    link: "https://goo.gl/maps/XKASi8o7NsbCnRxE6"
  },
  {
    title: 'Instagram',
    iframe: "https://www.instagram.com/p/CYDPp5ZrMcD/embed",
    link: "https://www.instagram.com/ua_taekwondo/"
  },
  {
    title: 'Youtube',
    // https://stackoverflow.com/a/46811491
    iframe: "https://www.youtube.com/embed/videoseries?list=UUF9sw7YeFE9mbM-POCMie7g", // list is channel ID replaced UC by UU
    link: "https://www.youtube.com/channel/UCF9sw7YeFE9mbM-POCMie7g"
  },
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };

  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <Swiper {...FavoriteCarousel}>
          {favoriteCourseData.map((props, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: "30px",
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};
