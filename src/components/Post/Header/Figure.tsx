import React from 'react';
import styled from 'styled-components';
import GatsbyImage, { FluidObject } from 'gatsby-image';

interface Props {
  image: FluidObject;
  imageAlt: string;
  caption?: string;
}

const PostHeaderFigureCaption = styled.figcaption`
  color: var(--color-otherText);
  font-size: 1.4rem;
  line-height: 1.4;
  margin-top: 1.5rem;
  padding: 0 2rem;
  text-align: center;
`;

export default function PostHeaderFigure({
  image,
  imageAlt,
  caption
}: Props) {
  return (
    <figure>
      <GatsbyImage
        fluid={image}
        alt={imageAlt}
      />
      {caption && (
        <PostHeaderFigureCaption>
          {caption}
        </PostHeaderFigureCaption>
      )}
    </figure>
  );
}