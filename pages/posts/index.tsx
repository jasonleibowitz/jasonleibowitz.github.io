import Head from 'next/head'
import Link from 'next/link';
import { getAllPosts } from 'lib/api';

export default function Home({ allPosts, className }) {

  return (
    <div className={className}>
      <Head>
        <title>Jason Leibowitz's Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {
          allPosts.map(post => {
            return (
              <Link as={`/posts/${post.slug}`} href={`/posts/${post.slug}`}>
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.date}</p>
                  <p>{post.excerpt}</p>
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
