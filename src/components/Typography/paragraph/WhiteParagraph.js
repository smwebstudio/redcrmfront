import styled from "styled-components";
import { Typography } from "antd";
import React  from "react";

const { Paragraph } = Typography;

const WhiteParagraphStyled = styled(Paragraph)`
  &&& {
      font-family: 'Montserrat arm', sans-serif;
    color: #ffffff !important;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;



const WhiteParagraph = ({ children, ...props }) => {
  return (
        <WhiteParagraphStyled {...props}>
          {children}
        </WhiteParagraphStyled>
  );
};


export default  WhiteParagraph
