import React from 'react';
import styled from 'styled-components';

interface Props {
  description: string;
}

const PostItemDescriptionStyled = styled.p`
  color: var(--color-otherText);
  margin-bottom: 1rem;
`;

export default function PostItemDescription({
  description
}: Props) {
  return (
    <PostItemDescriptionStyled>
      {description}
    </PostItemDescriptionStyled>
  );
}