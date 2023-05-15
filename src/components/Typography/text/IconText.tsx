import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {IconDefinition, SizeProp} from '@fortawesome/fontawesome-svg-core';
import { Typography} from 'antd';
import React from "react";

const {Text } = Typography;

interface Props {
    icon: IconDefinition;
    text: string;
    iconSize?: SizeProp;
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 16px;
  
  & span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`;

const IconText: React.FC<Props> = ({ icon, text, iconSize }: Props) => {
    return (
        <StyledContainer>
            <FontAwesomeIcon icon={icon} size={iconSize} color={'#2DD2C8'} />
            <Text>{text}</Text>
        </StyledContainer>
    );
};

export default IconText;
