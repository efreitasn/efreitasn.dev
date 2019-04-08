import React from 'react';
import styled from 'styled-components';
import { BG_COLOR } from 'Styles/colors';
import PostItemHeader from './Header';
import PostItemDescription from './Description';
import PostItemFooter from './Footer';

interface Props {
  title: string;
  description: string;
  url: string;
  date: string;
};

const PostItemStyled = styled.article`
  padding: 3rem 4rem;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  &:not(:last-child) {
    border-bottom: 2px solid ${BG_COLOR};
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