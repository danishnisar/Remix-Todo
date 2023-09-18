import { cssBundleHref } from "@remix-run/css-bundle";


import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

import styles from '~/styles/shared.css'
import ErrorMessage from './component/util/Error'
export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
];

function Document({title,children}){
  return (
    <html lang="en">
    <head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap" rel="stylesheet" />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    
    </body>
  </html>
  );
}
export default function App() {
  return (
    <Document>
      <Outlet/>
    </Document>
  );
}


export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Document title={error.statusText}>
      <ErrorMessage title={error.statusText}>
        <p>{error.status}</p>
        <p>{error.data?.message || 'Something went wrong'}</p>
      </ErrorMessage>
    </Document>
    );
  } else if (error instanceof Error) {
    return (
      <Document title={error.statusText}>
      <ErrorMessage title={error.statusText}>
        <p>{error.status}</p>
        <p>{error.data?.message || 'Something went wrongs'}</p>
      </ErrorMessage>
    </Document>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }

}