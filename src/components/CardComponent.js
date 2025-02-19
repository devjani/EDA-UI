import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const CustomCard = styled(Card)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#424242',
  color: '#fff',
  '&:hover': {
    borderLeft: '5px solid #3f51b5',
  },
  cursor: 'pointer'
});

const CustomCardContent = styled(CardContent)({
  flex: '1 0 auto',
});

const CustomCardIcon = styled(IconButton)({
  padding: '10px',
  color: '#fff',
});

const CardComponent = ({ title, content, icon: Icon, clickEvent }) => {
  return (
    <CustomCard onClick={()=>{clickEvent()}}>
      <CustomCardIcon>
        <Icon onClick={()=>{clickEvent()}}/>
      </CustomCardIcon>
      <CustomCardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CardComponent;
