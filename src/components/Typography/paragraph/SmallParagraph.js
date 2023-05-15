import styled from "styled-components";
import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const SmallParagraphStyled = styled(Paragraph)`
  color: #959595 !important;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 0px !important;
`;



const SmallParagraph  = ({ children, ...props }) => {
    return (
        <SmallParagraphStyled {...props}>
            {children}
        </SmallParagraphStyled>
    );
};


export default  SmallParagraph
