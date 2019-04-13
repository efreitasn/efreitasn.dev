import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface Props {
  createdAt: string;
}

const PostItemFooterStyled = styled.footer`
  align-items: center;
  display: flex;
  font-size: 1.4rem;
`;

const DateStyled = styled.time`
  color: ${({ theme }) => theme.colors.otherText};
  font-size: 1.2rem;
`;

export default function PostItemFooter({
  createdAt
}: Props) {
  const momentDate = moment(createdAt);

  return (
    <PostItemFooterStyled>
      <DateStyled
        title={momentDate.format('MM/DD/YYYY hh:mma')}
        dateTime={createdAt}
      >
        {momentDate.from()}
      </DateStyled>
    </PostItemFooterStyled>
  );
}