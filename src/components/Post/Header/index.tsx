import React from 'react';
import { FluidObject } from 'gatsby-image';
import PostHeaderBottom from './Bottom';
import PostHeaderTitle from './Title';
import PostHeaderDate from './Date';
import PostHeaderFigure from './Figure';

interface Props {
  title: string
  cover?: FluidObject
  coverAlt?: string,
  coverCaption?: string,
  createdAt?: string
};

export default function PostHeader({
  title,
  cover,
  coverAlt,
  coverCaption,
  createdAt
}: Props) {
  return (
    <header>
      {cover && coverAlt && (
        <PostHeaderFigure
          image={cover}
          imageAlt={coverAlt}
          caption={coverCaption}
        />
      )}
      <PostHeaderBottom>
        <PostHeaderTitle title={title} />
        {createdAt && (
          <PostHeaderDate date={createdAt} />
        )}
      </PostHeaderBottom>
    </header>
  );
}