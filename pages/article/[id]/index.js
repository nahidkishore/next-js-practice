import { useRouter } from 'next/router';

const article = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>this is a article id number : {id}</div>;
};

export default article;
