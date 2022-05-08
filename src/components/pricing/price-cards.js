import { Grid } from 'theme-ui';
import LeftCard from "./left-card";
import { RightCard } from "./right-card";
import { useState } from 'react';

export default function PriceCards({ isStudent }) {
    const [step, setStep] = useState(0)
    return (
        <Grid sx={styles.wrapper}>
            <LeftCard isStudent={isStudent} step={[step, setStep]} />
            <RightCard isStudent={isStudent} step={[step, setStep]} />
        </Grid>
    )
}

const styles = {
    wrapper: {
        display: 'grid',
        gridGap: '30px',
        gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
        marginLeft: 'auto',
        marginRight: 'auto',
        width: ['100%', null, null, null, '990px'],
    }
}