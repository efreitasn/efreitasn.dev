import React from 'react';
import styled from 'styled-components';
import { COLOR_GREY_3 } from 'Styles/colors';
import moment from 'moment';
import { bk2 } from 'Styles/breakpoints';

interface Props {
  classNamew?: string;
  date: string;
}

const PostHeaderDateStyled = styled.time`
  color: ${COLOR_GREY_3};
  padding: 0 4rem;

  ${bk2`
    padding: 0 2rem;
  `}
`;

export default function PostHeaderDate({
  date
}: Props) {
  return (
    <PostHeaderDateStyled dateTime={date}>
      {moment(date).format('MMMM DD, YYYY')}
    </PostHeaderDateStyled>
  );
}