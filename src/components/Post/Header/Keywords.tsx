import React from 'react';
import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

interface Props {
  keywords: string[];
}

const PostHeaderKeywordsStyled = styled.div`
  display: flex;
  margin-left: 4rem;
  margin-top: 2.5rem;

  ${bk2`
    margin-left: 2rem;
  `}
`;

const PostHeaderKeywordsItem = styled.div`
  background-color: var(--color-bodyText);
  color: var(--color-mainBg);
  font-size: 1.4rem;
  padding: 4px 1rem;
  border-radius: 5px;
  ${({ theme }) => theme.transitions.bgBorder ? `transition: ${theme.transitions.bgBorder};` : ''};

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default function PostHeaderKeywords({
  keywords
}: Props) {
  return (
    <PostHeaderKeywordsStyled>
      {keywords.map(keyword => (
        <PostHeaderKeywordsItem key={keyword}>
          {keyword}
        </PostHeaderKeywordsItem>
      ))}
    </PostHeaderKeywordsStyled>
  );
}