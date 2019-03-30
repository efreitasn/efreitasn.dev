import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Link from 'Components/Link';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  BG_COLOR,
  COLOR_GREY_3,
  COLOR_GREY_4
} from 'Styles/colors';

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

const PostItemLink = styled(Link)`
  color: ${COLOR_PRIMARY_DARK};
  text-decoration: none;

  &:hover {
    color: ${COLOR_PRIMARY};
  }
`;

const PostItemTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  display: inline-block;
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const PostItemDescription = styled.p`
  color: ${COLOR_GREY_3};
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const PostItemFooter = styled.footer`
  align-items: center;
  display: flex;
  font-size: 1.4rem;
`;

const DateStyled = styled.time`
  color: ${COLOR_GREY_4};
  font-size: 1.2rem;
`;

const PostItem = ({
  title,
  description,
  url,
  date
}: Props) => (
  <PostItemStyled>
    <header>
      <PostItemLink to={url}>
        <PostItemTitle>
          {title}
        </PostItemTitle>
      </PostItemLink>
    </header>
    <PostItemDescription>
      {description}
    </PostItemDescription>
    <PostItemFooter>
      {/* <CalendarIconStyled /> */}
      <DateStyled
        title={date}
        dateTime={date}
      >{moment(date).from()}</DateStyled>
    </PostItemFooter>
  </PostItemStyled>
);

export default PostItem;