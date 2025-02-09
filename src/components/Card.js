import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';

const CustomCard = styled(Card)({
  
  cursor: 'pointer'
});

const CustomCardContent = styled(CardContent)({
  flex: '1 0 auto',
});

const CustomCardIcon = styled(IconButton)({
  
});

const CardComponent = ({ title, content, icon: Icon, clickEvent }) => {
  return (
    <CustomCard onClick={()=>{clickEvent()}}>
      <CustomCardIcon onClick={()=>{clickEvent()}}>
        <Icon/>
      </CustomCardIcon>
      <CustomCardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CardComponent;
