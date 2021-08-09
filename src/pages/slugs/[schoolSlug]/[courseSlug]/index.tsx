import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('courseSlug page params: ', context.params);

  return {
    props: {
      host: (context.params?.host ?? '') as string,
      schoolSlug: (context.params?.schoolSlug ?? '') as string,
      courseSlug: (context.params?.courseSlug ?? '') as string,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { schoolSlug: 'school1', courseSlug: 'course1' } },
      { params: { schoolSlug: 'school2', courseSlug: 'course1' } },
    ],
    fallback: false,
  };
};

interface CourseProps {
  courseSlug: string;
  schoolSlug: string;
  host: string;
}

export default function Course(props: CourseProps): JSX.Element {
  const router = useRouter();

  console.log('COURSE LANDING PAGE');
  console.log('props: ', props);
  console.log('router pathname: ', router.pathname);
  console.log('router query: ', router.query);
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Jonathan Huang</title>
      </Head>
      <div>Course landing page</div>
      <div>School: {props.schoolSlug}</div>
      <div>Course: {props.courseSlug}</div>
    </div>
  );
}
