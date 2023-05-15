import NextLink, { LinkProps } from 'next/link';
import styled from 'styled-components';

type FooterMenuLinkProps = LinkProps & {
};

const FooterMenuLink = styled(NextLink)<FooterMenuLinkProps>`
  &&& {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #272A3D;
    
    &:hover {
      color: #26B3AA
    }    
  }   
`;

export default FooterMenuLink;
