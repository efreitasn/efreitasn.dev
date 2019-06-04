import React, { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'Components/Link';
import LayoutFooterSeparator from './Separator';

interface Props {
  links: Array<{
    to: string,
    text: string,
    newTab: boolean
  }>;
}

const LayoutFooterStyled = styled.footer`
  align-items: flex-end;
  display: flex;
  font-size: 1.4rem;
  justify-content: flex-end;
  margin-top: 2.5rem;
  padding: 0 1.5rem;

  & > div:first-child {
    margin-bottom: 5px;
  }
`;


export default function LayoutFooter({
  links
}: Props) {
  return (
    <LayoutFooterStyled>
      {links.map((
        {
          newTab,
          text,
          to
        },
        index
      ) => (
        <Fragment key={text}>
          {index !== 0 && <LayoutFooterSeparator />}
          <Link
            to={to}
            rel="noopener noreferrer"
            target={newTab ? '_blank' : undefined}
          >
            {text}
          </Link>
        </Fragment>
      ))}
    </LayoutFooterStyled>
  );
}