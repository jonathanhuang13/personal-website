import { GetServerSideProps } from 'next';
import Head from 'next/head';

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('home params: ', context.params);
  return { props: {} };
};

export default function Home(): JSX.Element {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Jonathan Huang</title>
      </Head>
      Under construction
    </div>
  );
}
