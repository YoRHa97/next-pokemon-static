import { Text } from '@nextui-org/react';
import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

type Props = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Pedro Lamarca' />
        <meta name='description' content={title} />
        <meta name='keyword' content={`${title}, pokemon, pokedex`} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={`Info about ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png `} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
