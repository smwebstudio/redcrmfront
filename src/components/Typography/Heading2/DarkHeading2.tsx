import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {TitleProps} from "antd/es/typography/Title";

const { Title } = Typography;

const DarkHeading2Styled = styled(Title)`
  &&& {
    color: #272A3D !important;
    font-weight: 700;
    font-size: 38px;
    line-height: 54px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

interface DarkHeading2Props  extends TitleProps {
    children: ReactNode;
}

const DarkHeading2:React.FC<DarkHeading2Props> = ({ children, ...props }) => {
  return (
      <div>
        <DarkHeading2Styled level={2} {...props}>
          {children}
        </DarkHeading2Styled>
      </div>
  );
};

export default  DarkHeading2
