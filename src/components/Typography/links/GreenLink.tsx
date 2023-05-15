import NextLink, { LinkProps } from 'next/link';
import styled from 'styled-components';

type GreenLinkProps = LinkProps & {
};

const GreenLink = styled(NextLink)<GreenLinkProps>`
  &&& {
    text-decoration: underline;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #2DD2C8;
    
    &:hover {
      color: #26B3AA
    }    
  }   
`;

export default GreenLink;
