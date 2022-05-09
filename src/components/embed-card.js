import { Button } from '@material-ui/core';
import React from 'react';
import { BiLinkExternal } from "react-icons/bi";
import { Box } from 'theme-ui';

const EmbedCard = (props) => {
  return (
    <Box sx={styles.embedCard}>
      <Box sx={styles.embedCard.image}>
        <iframe src={props.iframe} style={{ border: 0 }} allowFullScreen loading="lazy" width="100%" height="100%" />
      </Box>
      <Button endIcon={<BiLinkExternal />} href={props.link} target="_blank" color="inherit" variant="text">
        {props.title}
      </Button>
    </Box>
  );
};

export default EmbedCard;

const styles = {
  embedCard: {
    color: "#ef9e48",
    backgroundColor: '#fff',
    transition: '500ms',
    border: '1px solid #F3F4F5',
    display: 'flex',
    flexDirection: 'column',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    width: '100%',
    '&:hover': {
      boxShadow: '0px 15px 50px rgba(69, 88, 157, 0.1)',
    },
    image: {
      position: 'relative',
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      height: "350px",
      img: {
        display: 'block',
        width: '100%',
      },
    },
  },
};
