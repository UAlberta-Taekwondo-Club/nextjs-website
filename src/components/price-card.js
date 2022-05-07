import { Box, Card, Text, Flex, Heading, Button, Grid } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import PricingList from './pricing-list';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import LeftCard from './left-card';
import { MobileStepper } from "@material-ui/core"

const data =
{
  name: 'Premium',
  description: 'For startup enterprise',
  priceWithUnit: '$178.25',
  buttonText: 'Subscribe Now',
  points: [
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Ultimate access to all course, exercises and assessments',
      isAvailable: true,
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Free acess for all kind of exercise corrections with downloads.',
      isAvailable: true,
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Total assessment corrections with free download access system',
      isAvailable: true,
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Unlimited download of courses on the mobile app contents',
      isAvailable: true,
    },
    {
      icon: <IoIosCheckmarkCircle />,
      text: 'Download and print courses and exercises in PDF',
      isAvailable: true,
    },
  ],
};

const NUM_STEPS = 6

export function RightCard({ isStudent, step: [activeStep, setStep] }) {
  return (
    <Card sx={styles.pricingBox}>
      <Box>
        <Flex sx={styles.pricingHeader}>
          <Box>
            <Heading className="package__name" sx={styles.heading}>
              UofA Student
            </Heading>
            <Text
              as="p"
              sx={{
                color: '#343D48',
                '@media screen and (max-width: 480px)': {
                  fontSize: 14,
                },
              }}
            >
              description
            </Text>
          </Box>
          <Text className="package__price" sx={styles.price}>
            <div className="price">
              {isStudent ? "$30" : "$100+"}
              <br />
              <sub>per semester</sub>
            </div>
          </Text>
        </Flex>
        <PricingList items={data["points"]} childStyle={styles.listItem} />
        <Box
          sx={{
            textAlign: 'center',
            mt: 70,
            '@media screen and (max-width: 768px)': {
              mt: 40,
            },
          }}
        >

          <MobileStepper
            variant="dots"
            steps={NUM_STEPS}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button variant="buttons.primary" sx={styles.button} disabled={activeStep === NUM_STEPS - 1} onClick={() => setStep(activeStep + 1)}>
                Next
              </Button>
            }
            backButton={
              <Button variant="buttons.primary" sx={styles.button} disabled={activeStep === 0} onClick={() => setStep(activeStep - 1)}>
                Back
              </Button>
            }
          />
        </Box>
      </Box>
    </Card>
  );
}

export default function PriceCards({ isStudent }) {
  const [step, setStep] = useState(0)
  return (
    <Grid sx={styles.wrapper}>
      <LeftCard isStudent={isStudent} step={[step, setStep]} />
      <RightCard isStudent={isStudent} step={[step, setStep]} />
    </Grid>
  )
}

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const styles = {
  pricingBox: {
    p: '62px 70px 50px 40px',
    flex: '0 1 38.5%',
    backgroundColor: '#fff',
    border: '1px solid #F3F4F5',
    borderRadius: 10,
    ml: 30,
    position: 'relative',
    '@media screen and (max-width: 1366px)': {
      pr: '40px',
    },
    '@media screen and (max-width: 1024px)': {
      flex: '0 1 50%',
    },
    '@media screen and (max-width: 992px)': {
      p: '62px 25px 50px 25px',
    },
    '@media screen and (max-width: 768px)': {
      p: '50px 15px 30px',
    },
    '@media screen and (max-width: 620px)': {
      ml: 0,
      flex: '0 1 80%',
      mt: '40px',
    },
    '@media screen and (max-width: 480px)': {
      flex: '0 1 calc(100% - 10px)',
    },
    '&:first-of-type': {
      ml: 0,
      '@media screen and (max-width: 620px)': {
        mt: 0,
      },
    },
    'ul li': {
      animation: `${fadeIn2} 0.7s linear`,
    },
    border: '2.5px solid #25CB9E',
    '.package__name': {
      color: 'heading_secondary',
    },
    '.package__price > span': {
      color: 'text',
    },
    '.open': {
      color: 'text',
    },
    '.closed': {
      color: 'text',
      opacity: 0.6,
    },
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: '23px',
    color: 'black',
    marginBottom: ['5px', null, null, null, '12px'],
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: [35, null, null, null, 50],
    animation: `${fadeIn} 0.9s linear`,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 1,
    display: 'flex',
    letterSpacing: '-0.55px',
    color: '#0F2137',
    marginBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'column',
    textAlign: 'right',
    mt: '2px',
    '@media screen and (max-width: 768px)': {
      fontSize: 20,
    },
    '> span': {
      fontWeight: 'body',
      fontSize: 16,
      lineHeight: 1.25,
      display: 'block',
      marginBottom: '10px',
      color: 'white',
    },
    '> .price': {
      marginBottom: 0,
      color: '#25CB9E',
      '> sub': {
        position: 'relative',
        bottom: '6px',
      },
    },
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: '26px',
    marginBottom: 22,
    alignItems: 'flex-start',
    color: '#343D48',
    pr: 25,
    '@media screen and (max-width: 480px)': {
      fontSize: 15,
      lineHeight: 1.8,
      pr: 10,
      marginBottom: 12,
    },
    '&.closed': {
      opacity: 0.6,
      button: {
        color: '#788FB5',
      },
    },
  },
  button: {
    animation: `${fadeIn2} 0.7s linear`,
    ":disabled": {
      backgroundColor: "#cccccc",
      color: "grey",
      cursor: "default"
    }
  },
  wrapper: {
    display: 'grid',
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    marginLeft: 'auto',
    marginRight: 'auto',
    width: ['100%', null, null, null, '990px'],
  }
};
