import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {ParagraphProps} from "antd/es/typography/Paragraph";

const { Paragraph } = Typography;

const MainParagraphStyled = styled(Paragraph)`
  &&& {
    color: #272A3D !important;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 8px;
  }
`;

interface MainParagraphProps extends ParagraphProps {
    children: ReactNode;
}

const MainParagraph: React.FC<MainParagraphProps> = ({ children, ...props }) => {
    return (
        <MainParagraphStyled {...props}>
            {children}
        </MainParagraphStyled>
    );
};


export default  MainParagraph
