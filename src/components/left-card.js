import { Card } from 'theme-ui';
import { styles as cardStyles } from "./price-card"
import { Stepper, Step, StepLabel, Typography, StepContent } from "@material-ui/core"
import { keyframes } from '@emotion/core';



const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];
export default function LeftCard({ isStudent, step: [activeStep, setStep] }) {
    return (
        <Card sx={cardStyles.pricingBox}>
            <Stepper activeStep={activeStep} orientation="vertical" >
                {steps.map((step, index) => (
                    <Step key={step.label} sx={styles.stepper}>
                        <StepLabel >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography>{step.description}</Typography>

                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Card >
    )
}

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
const styles = {
    stepper: {
        animation: `${fadeIn2} 0.7s linear`,
    }

}