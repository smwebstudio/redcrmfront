import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";
import {TitleProps} from "antd/es/typography/Title";

const { Title } = Typography;

const Heading4Styled = styled(Title)`
  &&& {
    color: #272A3D !important;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top:0px;
  }
`;

interface Heading4Props extends TitleProps {
    children: ReactNode;
}

const BigHeading4:React.FC<Heading4Props> = ({ children, ...props }) => {
  return (
      <div>
        <Heading4Styled level={4} {...props}>
          {children}
        </Heading4Styled>
      </div>
  );
};

export default  BigHeading4
