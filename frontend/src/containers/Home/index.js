import React from "react";
import styled from "styled-components";

import QrCode from "../../components/QrCode";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <Title>Scan the QR code</Title>
      <QrCode />
    </Wrapper>
  );
}

export default Home;