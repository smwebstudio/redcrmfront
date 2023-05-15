import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {ParagraphProps} from "antd/es/typography/Paragraph";

const { Paragraph } = Typography;

const SmallParagraphStyled = styled(Paragraph)`
  color: #272A3D !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 0px !important;
`;

interface SmallParagraphProps extends ParagraphProps {
    children: ReactNode;
}

const SmallParagraph: React.FC<SmallParagraphProps> = ({ children, ...props }) => {
    return (
        <SmallParagraphStyled {...props}>
            {children}
        </SmallParagraphStyled>
    );
};


export default  SmallParagraph
