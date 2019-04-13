import React from 'react';
import styled from 'styled-components';

interface Props {
  description: string;
}

const PostItemDescriptionStyled = styled.p`
  color: ${({ theme }) => theme.colors.otherText};
  font-size: 1.6rem;
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