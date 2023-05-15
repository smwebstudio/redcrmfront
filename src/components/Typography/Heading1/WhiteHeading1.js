import styled from "styled-components";
import { Typography } from "antd";
import React  from "react";

const { Title } = Typography;

const WhiteHeading1Styled = styled(Title)`
  &&& {
    font-family: 'Montserrat arm', sans-serif;
    color: #FFFFFF !important;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
  }

  @media (max-width: 767px) {
    &&& {
      font-size: 25px;
      line-height: 30px;
    }
  }

`;



const WhiteHeading1 = ({ children, ...props }) => {
  return (
      <div>
        <WhiteHeading1Styled level={1} {...props}>
          {children}
        </WhiteHeading1Styled>
      </div>
  );
};

export default  WhiteHeading1
