import styled from "styled-components";
import { Typography } from "antd";
import React  from "react";

const { Title } = Typography;

const DarkHeading3Styled = styled(Title)`
  &&& {
    color: #414141 !important;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
  }
`;


const DarkHeading3  = ({ children, ...props }) => {
  return (
      <div>
        <DarkHeading3Styled level={3} {...props}>
          {children}
        </DarkHeading3Styled>
      </div>
  );
};

export default  DarkHeading3
