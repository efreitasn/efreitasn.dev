import React from 'react';
import styled from 'styled-components';
import { COLOR_GREY_3 } from 'Styles/colors';

interface Props {
  description: string;
}

const PostItemDescriptionStyled = styled.p`
  color: ${COLOR_GREY_3};
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