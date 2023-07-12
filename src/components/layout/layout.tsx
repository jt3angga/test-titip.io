import Head from 'next/head';
import { Sidebar } from './sidebar';

export interface LayoutProps {
  children: React.ReactElement;
  title?: string;
}

export function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>{props.title ?? 'Titip.IO Test'}</title>
      </Head>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        {props.children}
      </div>
    </>
  );
}
