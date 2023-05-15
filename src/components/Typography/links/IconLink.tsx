import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from "@fortawesome/pro-thin-svg-icons";

interface StyledLinkProps {
    color?: string;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #2DD2C8;

  &:hover {
    text-decoration: underline;
    color: #26B3AA;
  }

  & > span {
    margin-right: 0.5rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
`;

interface IconLinkProps {
    href: string;
    text: string;
    color?: string;
}

const IconLink = ({ href, text, color }: IconLinkProps) => {
    return (
        <StyledLink href={href} color={color}>
            <span>{text}</span>
            <StyledIcon icon={faArrowRight} />
        </StyledLink>
    );
};

export default IconLink;
