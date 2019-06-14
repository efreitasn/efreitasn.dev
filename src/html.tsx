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
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const valueByStorage = localStorage.getItem('dark-mode');
              let isDark = valueByStorage === 'true';

              if (valueByStorage === null) {
                const mq = window.matchMedia('(prefers-color-scheme: dark)');
  
                if (mq.matches) {
                  isDark = true;
                }
              }

              if (isDark) {
                document.body.classList.add('dark');
              } else {
                document.body.classList.add('light');
              }
            `
          }}
        />
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