import styled from "styled-components";
import { Typography } from "antd";
import React from "react";

const { Paragraph } = Typography;

const RedTextStyled = styled(Paragraph)`
  &&& {
    color: #D8002C ;
    display: inline;
    font-size: inherit;
    line-height: inherit;
  }
`;


const RedText = ({ children, ...props }) => {
    return (
        <RedTextStyled {...props}>
            {children}
        </RedTextStyled>
    );
};


export default  RedText
