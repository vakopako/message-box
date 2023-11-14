import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Box, Typography, Link as MuiLink } from '@mui/material';

import QrCode from '../../components/QrCode';

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled(Typography)`
  text-align: center;
`;

const HARDCODED_MESSAGE_GROUP_ID = 'c0b2b020-6787-11ee-8c99-0242ac120002';

const Home = () => {
  return (
    <FlexBox>
      <Heading variant="h2">Scan the QR code</Heading>
      <QrCode groupId={HARDCODED_MESSAGE_GROUP_ID} />
      <MuiLink component={Link} to={`/${HARDCODED_MESSAGE_GROUP_ID}`}>
        or just click here
      </MuiLink>
    </FlexBox>
  );
};

export default Home;