import { Collapse, MobileStepper } from "@material-ui/core";
import React, { useRef } from 'react';
import { Box, Button, Card, Flex, Heading, Text } from 'theme-ui';
import getSteps from './pricing.data';


export function RightCard({ isStudent, step: [activeStep, setStep] }) {
  const steps = getSteps(isStudent)

  return (
    <Card sx={styles.pricingBox}>
      <Box>
        <Flex sx={styles.pricingHeader}>
          <Heading className="package__name" sx={styles.heading}>
            {steps[activeStep].right.title}
          </Heading>
          <Text className="package__price" sx={styles.price}>
            <div className="price">
              {isStudent ? "$30" : "$100+"}
              <sub>/semester</sub>
            </div>
          </Text>
        </Flex>

        {steps.map((step, i) => (
          <Collapse in={i === activeStep} key={`step-${i}`}>
            {step.right.content}
          </Collapse >
        ))}
      </Box>

      <MobileStepper
        variant="dots"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        style={styles.stepper}
        nextButton={
          <Button variant="buttons.primary" sx={styles.button} disabled={activeStep === steps.length - 1} onClick={() => setStep(activeStep + 1)}>
            Next
          </Button>
        }
        backButton={
          <Button variant="buttons.primary" sx={styles.button} disabled={activeStep === 0} onClick={() => setStep(activeStep - 1)}>
            Back
          </Button>
        }
      />
    </Card>
  );
}



export const styles = {

  pricingBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: '40px',
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
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 25
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
  button: {
    ":disabled": {
      backgroundColor: "#cccccc",
      color: "grey",
      cursor: "default"
    }
  },
  stepper: {
    alignSelf: "flex-end",
    width: "100%",
  }
};
