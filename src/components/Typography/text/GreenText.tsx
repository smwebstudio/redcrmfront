import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {ParagraphProps} from "antd/es/typography/Paragraph";
import {TextProps} from "antd/es/typography/Text";

const { Paragraph } = Typography;

const GreenTextStyled = styled(Paragraph)`
  &&& {
    color: #2DD2CB ;
    display: inline;
    font-size: inherit;
    line-height: inherit;
  }
`;

interface GreenTextProps extends TextProps {
    children: ReactNode;
}

const GreenText: React.FC<GreenTextProps> = ({ children, ...props }) => {
    return (
        <GreenTextStyled {...props}>
            {children}
        </GreenTextStyled>
    );
};


export default  GreenText
