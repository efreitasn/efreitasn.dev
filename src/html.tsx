import React from 'react';

interface Props {
  htmlAttributes: {};
  headComponents: any[];
  bodyAttributes: {};
  preBodyComponents: [];
  body: string;
  postBodyComponents: [];
}

export default function HTML({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body: bodyProps,
  postBodyComponents
}: Props) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="prefetch" href="https://fonts.googleapis.com/css?family=Roboto:400,700" as="font" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{
            __html: bodyProps
          }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}