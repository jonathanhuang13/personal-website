import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps<SchoolProps> = async (context) => {
  console.log(context);
  
  return {
    props: {
      schoolSlug: (context.params?.host ?? '') as string,
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
}

export default function School(props: SchoolProps): JSX.Element {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Jonathan Huang</title>
      </Head>
      School: {props.schoolSlug}
    </div>
  );
}
