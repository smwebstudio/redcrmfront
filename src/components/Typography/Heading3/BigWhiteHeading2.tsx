import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";

const { Title } = Typography;

const WhiteTitleStyled = styled(Title)`
  &&& {
    color: #ffffff !important;
    font-weight: 700;
    font-size: 46px;
    line-height: 62px;
  }
`;

interface WhiteTitleProps {
    children: ReactNode;
}

const BigWhiteHeading2:React.FC<WhiteTitleProps> = ({ children }) => {
  return (
      <div>
        <WhiteTitleStyled level={2}>
          {children}
        </WhiteTitleStyled>
      </div>
  );
};

export default  BigWhiteHeading2
