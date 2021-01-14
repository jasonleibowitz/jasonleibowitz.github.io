import Head from 'next/head'
import Link from 'next/link';
import { getAllPosts } from 'lib/api';
import { Typography } from 'components';
import { format } from 'date-fns';

import styles from './index.module.scss';

const { Title, Text } = Typography;

export default function Home({ allPosts, className }) {

  return (
    <div className={className}>
      <Head>
        <title>Jason Leibowitz's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}>
        <div>
          {
          allPosts.map(post => {
            return (
              <Link as={`/posts/${post.slug}`} href={`/posts/${post.slug}`}>
                <div className={styles.post}>
                  <Title level={2}>{post.title}</Title>
                  <Text className={styles.date}>{format(new Date(post.date), 'MMMM Mo, yyyy')}</Text>
                  <Text>{post.excerpt}</Text>
                </div>
              </Link>
            )
          })
        }
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts }
  }
}
