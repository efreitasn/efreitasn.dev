import React from 'react';
import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

interface Props {
  title: string
}

const PostHeaderTitleStyled = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  padding: 0 4rem;
  line-height: 3.6rem;
  text-align: justify;

  ${bk2`
    padding: 0 2rem;
  `}
`;

export default function PostHeaderTitle({
  title
}: Props) {
  return (
    <PostHeaderTitleStyled>
      {title}
    </PostHeaderTitleStyled>
  );
}