import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'Components/Link';
import {
  COLOR_PRIMARY,
  COLOR_PRIMARY_DARK,
  COLOR_GREY_1,
  COLOR_GREY_2,
  COLOR_GREY_3
} from 'Styles/colors';

const PostItemStyled = styled.article`
  padding: 3rem 4rem;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  &:not(:last-child) {
    border-bottom: 2px solid ${COLOR_GREY_1};
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
  color: ${COLOR_GREY_2};
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const PostItemFooter = styled.footer`
  align-items: center;
  display: flex;
  font-size: 1.4rem;
`;

const DateStyled = styled.span`
  color: ${COLOR_GREY_3};
  font-size: 1.2rem;
`;

const PostItem = ({
  title,
  description,
  url,
  date
}) => {
  const momentDate = moment(date);

  return (
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
        <DateStyled title={momentDate.format('YYYY-MM-DD')}>{momentDate.from()}</DateStyled>
      </PostItemFooter>
    </PostItemStyled>
  );
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default PostItem;