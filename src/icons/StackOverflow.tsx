// Font Awesome stack overflow icon
import React from 'react';

interface Props {
  title: string,
  className: string
}

export default function StackOverflowIcon({
  title,
  className
}: Props) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 28"
      className={className}
    >
      <title>{title}</title>
      <path d="M20.141 25.5h-17.469v-7.5h-2.5v10h22.469v-10h-2.5v7.5zM5.422 17.313l0.516-2.453 12.234 2.578-0.516 2.438zM7.031 11.469l1.047-2.281 11.328 5.297-1.047 2.266zM10.172 5.906l1.594-1.922 9.594 8.016-1.594 1.922zM16.375 0l7.453 10.016-2 1.5-7.453-10.016zM5.156 22.984v-2.484h12.5v2.484h-12.5z"></path>
    </svg>
  );
}