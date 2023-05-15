import styled from 'styled-components';
import React from "react";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 0px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;



const ContainerBoxed = ({ children, className }) => {
    return <Container className={className}>{children}</Container>;
};

export default ContainerBoxed;
