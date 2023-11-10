import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import QrCode from "../../components/QrCode";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const HARDCODED_MESSAGE_GROUP_ID = 'c0b2b020-6787-11ee-8c99-0242ac120002';

const Home = () => {
  return (
    <Wrapper>
      <Title>Scan the QR code</Title>
      <QrCode groupId={HARDCODED_MESSAGE_GROUP_ID} />
      <Link to={`/${HARDCODED_MESSAGE_GROUP_ID}`}>or just click here</Link>
    </Wrapper>
  );
};

export default Home;