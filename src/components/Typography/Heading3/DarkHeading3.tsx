import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {TitleProps} from "antd/es/typography/Title";

const { Title } = Typography;

const DarkHeading3Styled = styled(Title)`
  &&& {
    color: #272A3D !important;
    font-weight: 700;
    font-size: 30px;
    line-height: 46px;
  }
`;

interface DarkHeading3Props extends TitleProps {
    children: ReactNode;
}

const DarkHeading3:React.FC<DarkHeading3Props> = ({ children, ...props }) => {
  return (
      <div>
        <DarkHeading3Styled level={3} {...props}>
          {children}
        </DarkHeading3Styled>
      </div>
  );
};

export default  DarkHeading3
