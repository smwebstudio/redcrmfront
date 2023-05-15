import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {TitleProps} from "antd/es/typography/Title";

const { Title } = Typography;

const DarkHeading1Styled = styled(Title)`
  &&& {
    font-family: 'Noto Sans', sans-serif;
    color: #272A3D !important;
    font-weight: 700;
    font-size: 46px;
    line-height: 62px;
  }

  @media (max-width: 767px) {
    &&& {
      font-size: 36px;
      line-height: 48px;
    }
  }
  
`;

interface DarkHeading1Props extends TitleProps {
    children: ReactNode;
}

const DarkHeading1:React.FC<DarkHeading1Props> = ({ children, ...props }) => {
  return (
      <div>
        <DarkHeading1Styled level={1} {...props}>
          {children}
        </DarkHeading1Styled>
      </div>
  );
};

export default  DarkHeading1
