import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {ParagraphProps} from "antd/es/typography/Paragraph";

const { Paragraph } = Typography;

const WhiteParagraphStyled = styled(Paragraph)`
  &&& {
    color: #ffffff !important;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;

interface WhiteParagraphProps extends ParagraphProps {
    children: ReactNode;
}

const WhiteParagraph: React.FC<WhiteParagraphProps> = ({ children, ...props }) => {
  return (
        <WhiteParagraphStyled {...props}>
          {children}
        </WhiteParagraphStyled>
  );
};


export default  WhiteParagraph
