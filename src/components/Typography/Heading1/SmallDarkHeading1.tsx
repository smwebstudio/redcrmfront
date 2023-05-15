import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {TitleProps} from "antd/es/typography/Title";

const { Title } = Typography;

const SmallDarkHeading1Styled = styled(Title)`
  &&& {
    font-family: 'Noto Sans', sans-serif;
    color: #272A3D !important;
    font-weight: 700;
    font-size: 38px;
    line-height: 54px;
    margin: 0;
  }

  @media (max-width: 767px) {
    &&& {
      font-size: 36px;
      line-height: 48px;
    }
  }
  
`;

interface SmallDarkHeading1Props extends TitleProps {
    children: ReactNode;
}

const SmallDarkHeading1:React.FC<SmallDarkHeading1Props> = ({ children, ...props }) => {
  return (
      <div>
        <SmallDarkHeading1Styled level={1} {...props}>
          {children}
        </SmallDarkHeading1Styled>
      </div>
  );
};

export default  SmallDarkHeading1
