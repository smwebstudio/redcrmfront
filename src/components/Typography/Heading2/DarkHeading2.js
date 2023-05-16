import styled from "styled-components";
import { Typography } from "antd";
import React  from "react";

const { Title } = Typography;

const DarkHeading2Styled = styled(Title)`
  &&& {
    color: #414141 !important;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
`;


const DarkHeading2  = ({ children, ...props }) => {
  return (
      <div>
        <DarkHeading2Styled level={3} {...props}>
          {children}
        </DarkHeading2Styled>
      </div>
  );
};

export default  DarkHeading2
