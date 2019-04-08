import React from 'react';
import PostItemHeaderLink from './Link';
import PostItemHeaderTitle from './Title';

interface Props {
  title: string;
  url: string;
}

export default function PostItemHeader({
  title,
  url
}: Props) {
  return (
    <header>
      <PostItemHeaderLink to={url}>
        <PostItemHeaderTitle title={title} />
      </PostItemHeaderLink>
    </header>
  );
}