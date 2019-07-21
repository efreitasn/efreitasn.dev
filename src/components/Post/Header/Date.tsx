import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { bk2 } from 'Styles/breakpoints';

interface Props {
  classNamew?: string;
  createdAt: string;
  updatedAt?: string;
}

const PostHeaderDateWrapper = styled.div`
  align-items: center;
  color: var(--color-otherText);
  display: flex;
  padding: 0 4rem;

  ${bk2`
    padding: 0 2rem;
  `}
`;

const UpdatedAtWrapper = styled.div`
  background-color: var(--color-bodyBg);
  ${({ theme }) => theme.transitions.bgBorder ? `transition: ${theme.transitions.bgBorder};` : ''};
  border-radius: 5px;
  font-size: 1.2rem;
  margin-left: 1rem;
  padding: .5rem 1rem;
`;

export default function PostHeaderDate({
  createdAt,
  updatedAt
}: Props) {
  const createdAtMomentDate = moment(createdAt);
  const updatedAtMomentDate = moment(updatedAt);

  return (
    <PostHeaderDateWrapper>
      <time
        dateTime={createdAt}
        title={createdAtMomentDate.format('MM/DD/YYYY hh:mma')}
      >
        {createdAtMomentDate.format('MMMM DD, YYYY')}
      </time>
      {updatedAt && (
        <UpdatedAtWrapper>
          <span>updated in </span>
          <time
            dateTime={updatedAt}
            title={updatedAtMomentDate.format('MM/DD/YYYY hh:mma')}
          >
            {updatedAtMomentDate.format('MMMM DD, YYYY')}
          </time>
        </UpdatedAtWrapper>
      )}
    </PostHeaderDateWrapper>
  );
}
