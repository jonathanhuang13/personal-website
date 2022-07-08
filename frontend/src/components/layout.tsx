import React from 'react';

import Nav from './nav';
import SEO from './seo';

interface Props {
  title: string;
  description: string;
  faviconURL: string;
  shareImage?: string;
  keywords: string;
  preventIndexing: boolean;

  children: React.ReactNode;
}

export default function Layout(props: Props): JSX.Element {
  return (
    <>
      <SEO {...props} />
      <div className="max-w-4xl mx-auto my-6 md:my-12 prose md:prose-lg">
        <Nav logoURL={props.faviconURL} />
        {props.children}
      </div>
    </>
  );
}
