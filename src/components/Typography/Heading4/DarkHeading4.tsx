import styled from "styled-components";
import { Typography } from "antd";
import React  from "react";

const { Title } = Typography;

const DarkHeading4Styled = styled(Title)`
    &&& {
        color: #414141 !important;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
    }
`;


const DarkHeading4  = ({ children, ...props }) => {
    return (
        <div>
            <DarkHeading4Styled level={4} {...props}>
                {children}
            </DarkHeading4Styled>
        </div>
    );
};

export default  DarkHeading4
