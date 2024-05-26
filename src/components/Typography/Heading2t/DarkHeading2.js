'use client'
import styled from "styled-components";
import { Typography } from "antd";
const { Title } = Typography;

const DarkHeading2Styled = styled(Title)`
  &&& {
    color: #414141 !important;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;


export const DarkHeading2  = ({ children, ...props }) => {
  return (
        <DarkHeading2Styled level={2} {...props}>
          {children}
        </DarkHeading2Styled>
  );
};

export default  DarkHeading2
