import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const PostItemHeaderTitleStyled = styled.h2`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  font-size: 2.2rem;
  margin-bottom: 1rem;
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