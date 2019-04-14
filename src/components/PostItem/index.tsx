import React from 'react';
import styled from 'styled-components';
import PostItemHeader from './Header';
import PostItemDescription from './Description';
import PostItemFooter from './Footer';

interface Props {
  title: string;
  description: string;
  url: string;
  date: string;
}

const PostItemStyled = styled.article`
  padding: 3rem 4rem;

  /* when it hits 3 posts :) */
  /* &:nth-child(even) {
    background-color: var(--color-bodyBg);
  } */

  &:not(:last-child) {
    border-bottom: 2px solid var(--color-bodyBg);
  }
`;

const PostItem = ({
  title,
  description,
  url,
  date
}: Props) => (
  <PostItemStyled>
    <PostItemHeader
      title={title}
      url={url}
    />
    <PostItemDescription description={description} />
    <PostItemFooter createdAt={date} />
  </PostItemStyled>
);

export default PostItem;