import React from 'react';
import styled from 'styled-components';
import { bk2 } from 'Styles/breakpoints';

interface Props {
  title: string;
}

const PostItemHeaderTitleStyled = styled.h2`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  font-size: 2.2rem;
  margin-bottom: 1rem;

  ${bk2`
    font-size: 2.4rem;
  `}
`;

export default function PostItemHeaderTitle({
  title
}: Props) {
  return (
    <PostItemHeaderTitleStyled>
      {title}
    </PostItemHeaderTitleStyled>
  );
}