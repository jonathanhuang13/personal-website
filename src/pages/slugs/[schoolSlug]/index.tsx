import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const getStaticProps: GetStaticProps<SchoolProps> = async (context) => {
  console.log('schoolSlug page params: ', context.params);

  return {
    props: {
      host: (context.params?.host ?? '') as string,
      schoolSlug: (context.params?.schoolSlug ?? '') as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { schoolSlug: 'school1' } }, { params: { schoolSlug: 'school2' } }],
    fallback: false,
  };
};

interface SchoolProps {
  schoolSlug: string;
  host: string;
}

export default function School(props: SchoolProps): JSX.Element {
  const router = useRouter();

  console.log('school props: ', props);
  console.log('router pathname: ', router.pathname);
  console.log('router query: ', router.query);
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Jonathan Huang</title>
      </Head>
      School: {props.schoolSlug}
    </div>
  );
}
