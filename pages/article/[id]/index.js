import { server } from '../../../config';
import Meta from '../../../components/Meta';
import Link from 'next/link';
import { useRouter } from 'next/router';

const article = ({ article }) => {
  /*   const router = useRouter();
  const { id } = router.query; */
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h2>{article.title}</h2>
      <h2>{article.body}</h2>
      <h3>this is a article id number : {article.id}</h3>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

/* export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();
  return {
    props: {
      article,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
}; */
export default article;
