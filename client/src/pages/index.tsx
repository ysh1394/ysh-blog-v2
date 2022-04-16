import Container from '@/components/common/Container';
import MoreStories from '@/components/more-stories';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import { getAllPosts } from '@/lib/api';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import Post from '@/types/post';
import { useEffect } from 'react';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  // useEffect(async () => {
  //   const res = await fetch('http://localhost:4000/search', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json, text/plain, */*',
  //       'User-Agent': '*',
  //     },
  //   });
  //   console.log('res ', res);

  //   // const jsonData = await res.json();

  //   // const data = JSON.stringify(jsonData);
  //   // console.log('data ', data);
  // }, []);

  return (
    <>
      {/* <Head>
        <title>ysh's Web Site</title>
      </Head> */}
      <Container>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/search', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    },
  });

  console.log('res ', res);

  // const jsonData = await res.text();
  const jsonData = await res.json();

  const data = JSON.stringify(jsonData);
  console.log('data ', data);

  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
