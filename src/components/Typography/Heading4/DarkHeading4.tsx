import styled from "styled-components";
import { Typography } from "antd";
import React, {ReactNode} from "react";

const { Title } = Typography;

const DarkHeadingStyled = styled(Title)`
  color: #272A3D !important;
  font-weight: 600 !important;
  font-size: 14px !important;
  line-height: 22px !important;
`;

interface DarkHeadingProps {
    children: ReactNode;
}

const DarkHeading4:React.FC<DarkHeadingProps> = ({ children }) => {
  return (
      <div>
        <DarkHeadingStyled level={4}>
          {children}
        </DarkHeadingStyled>
      </div>
  );
};

export default  DarkHeading4
