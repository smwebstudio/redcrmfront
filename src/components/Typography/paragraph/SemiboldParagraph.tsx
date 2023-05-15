import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {ParagraphProps} from "antd/es/typography/Paragraph";

const { Paragraph } = Typography;

const SemiboldParagraphStyled = styled(Paragraph)`
  &&& {
    color: #272A3D !important;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`;

interface SemiboldParagraphProps extends ParagraphProps {
    children: ReactNode;
}

const SemiboldParagraph: React.FC<SemiboldParagraphProps> = ({ children, ...props }) => {
    return (
        <SemiboldParagraphStyled {...props}>
            {children}
        </SemiboldParagraphStyled>
    );
};


export default  SemiboldParagraph
