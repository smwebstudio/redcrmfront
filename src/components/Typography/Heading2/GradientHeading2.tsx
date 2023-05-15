import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";

const { Title } = Typography;

const GradientTitleStyled = styled(Title)<{ gradientcolor: string }>`
  &&& {
    background: ${(props) =>
            `linear-gradient(to bottom, ${props.gradientcolor})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 30px;
    line-height: 46px;
  }
`;

interface GradientHeadinProps {
  gradientColor: string;
  children: ReactNode
}

const GradientHeading2: React.FC<GradientHeadinProps> = ({ children, gradientColor }) => {
  return (
      <div>
        <GradientTitleStyled level={2} gradientcolor={gradientColor}>
          {children}
        </GradientTitleStyled>
      </div>
  );
};

export default  GradientHeading2
