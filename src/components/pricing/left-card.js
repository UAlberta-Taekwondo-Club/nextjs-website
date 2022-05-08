import { Step, StepContent, StepLabel, Stepper } from "@material-ui/core";
import { Card } from 'theme-ui';
import getSteps from './pricing.data';
import { styles as cardStyles } from "./right-card";



export default function LeftCard({ isStudent, step: [activeStep, setStep] }) {
    return (
        <Card sx={cardStyles.pricingBox}>
            <Stepper activeStep={activeStep} orientation="vertical" >
                {getSteps(isStudent).map((step, i) => (
                    <Step key={i} >
                        <StepLabel >
                            {step.left.title}
                        </StepLabel>
                        <StepContent style={styles.step}>
                            {step.left.content}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </Card >
    )
}

const styles = {
    step: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
}