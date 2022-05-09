import React, { useState } from 'react';
import { Box, Container } from 'theme-ui';
import BlockTitle from 'components/block-title';
import FeeCards from '../components/fees/fee-cards';

const Fees = () => {
  const [isStudent, setIsStudent] = useState(true);
  return (
    <Box as="section" id="fees" sx={styles.fees}>
      <Container>
        <BlockTitle
          sx={styles.fees.blockTitle}
          tagline="$"
          heading="Club fees"
        />
        <Box sx={styles.fees.btnWrap}>
          <Box as="ul" sx={styles.fees.btnUl}>
            <Box
              as="li"
              className={` ${isStudent === true ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.fees.btn}
              onClick={() => setIsStudent(true)}
            >
              UofA student
            </Box>
            <Box
              as="li"
              className={` ${isStudent === false ? 'active' : ''}`}
              variant="buttons.primary"
              sx={styles.fees.btn}
              onClick={() => setIsStudent(false)}
            >
              Not a student
            </Box>
          </Box>
        </Box>
        <FeeCards isStudent={isStudent} />

      </Container>
    </Box>
  );
};

export default Fees;

const styles = {
  fees: {
    marginTop: 70,
    marginBottom: 120,
    '@media(max-width:991px)': {
      my: 60
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)',
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)',
      },
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s',
    },
    blockTitle: {
      textAlign: 'center',
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px',
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block',
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent',
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px',
      },
    },
  },
};
