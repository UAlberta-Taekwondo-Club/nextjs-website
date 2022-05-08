import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

export default function PricingList({ items = [], parentStyle }) {
  return (
    <Box
      as="ul"
      style={{
        listStyleType: 'none',
        margin: 0,
        marginTop: "20px",
        padding: 0,
        ...parentStyle,
      }}
    >
      {items.map(({ icon, text, isAvailable }, i) => (
        <Flex
          className={isAvailable ? 'open' : 'closed'}
          as="li"
          sx={styles.listItem}
          key={i}
        >
          <IconButton
            sx={{
              width: '35px',
              height: 'auto',
              color: '#25CB9E',
              padding: 0,
              fontSize: 23,
              marginLeft: '-1px',
              flexShrink: 0,
              justifyContent: 'flex-start',
              marginTop: '3px',
              '@media screen and (max-width: 480px)': {
                width: '25px',
                fontSize: 18,
                mt: '5px',
              },
            }}
            aria-label="list icon"
          >
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}
    </Box>
  );
}


const styles = {
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
  }
}