import React from 'react';
import Banner from 'components/banner/banner';
import InfoWidgets from 'sections/info-widgets';
import WhatIsTkd from 'sections/what-is-tkd';
import EmbedCards from 'sections/embed-cards';
import { Box } from 'theme-ui';

export default function About() {
    return (
        <Box as="section" id="about">
            <Banner />
            <EmbedCards />
            <InfoWidgets />
            <WhatIsTkd />
        </Box>
    )
}