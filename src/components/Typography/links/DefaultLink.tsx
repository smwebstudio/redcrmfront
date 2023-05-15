import NextLink, { LinkProps } from 'next/link';
import styled from 'styled-components';

type DefaultLinkProps = LinkProps & {
};

const DefaultLink = styled(NextLink)<DefaultLinkProps>`
  &&& {
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #272A3D !important;
    padding: 8px 16px;
    
    &:hover {
      color: #26B3AA !important;
    }    
  }   
`;

export default DefaultLink;
