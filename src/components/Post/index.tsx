import React from 'react';
import PostHeader from './Header';
import { FluidObject } from 'gatsby-image';
import PostContent from 'Components/Post/Content';
import styled from 'styled-components';

interface Props {
  content: string;
  title: string;
  cover?: FluidObject;
  coverAlt?: string;
  coverCaption?: string;
  keywords: string[];
  createdAt: string;
  updatedAt?: string;
}

const PostStyled = styled.div`
  margin-bottom: 4rem;
`;

export default function Post({
  content,
  title,
  cover,
  coverAlt,
  coverCaption,
  createdAt,
  updatedAt,
  keywords
}: Props) {
  return (
    <PostStyled>
      <PostHeader 
        title={title}
        coverAlt={coverAlt}
        coverCaption={coverCaption}
        createdAt={createdAt}
        updatedAt={updatedAt}
        cover={cover}
        keywords={keywords}
      />
      <PostContent
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
    </PostStyled>
  );
}