import NextLink, { LinkProps } from 'next/link';
import styled from 'styled-components';

type FooterMenuLinkProps = LinkProps & {
};

const MenuLink = styled(NextLink)<FooterMenuLinkProps>`
  &&& {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: #272A3D;
    
    &:hover {
      color: #2DD2C8
    }    
  }   
`;

export default MenuLink;
