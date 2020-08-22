import { useRouter } from 'next/router';
import ErrorPage from 'next/error'; 
import { getPostBySlug, getAllPosts } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';

export default function Post({ className, post, preview }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />
	}

	return (
		<>
			{router.isFallback ? (
				<h1>Loading...</h1>
			) : (
				<div className={className}>
					<h1>{post.title}</h1>
					<p>Author: {post.author.name}</p>
					<p>Date: {post.date}</p>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</div>
			)}
		</>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	])

	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content,
			}
		}
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'])

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug
				}
			}
		}),
		fallback: false
	}
}
