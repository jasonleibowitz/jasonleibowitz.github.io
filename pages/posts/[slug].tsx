import { useRouter } from 'next/router';
import ErrorPage from 'next/error'; 
import { getPostBySlug, getAllPosts } from 'lib/api';
import markdownToHtml from 'lib/markdownToHtml';
import { Typography } from 'components'
import { format } from 'date-fns';

const { Title, Text } = Typography;

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
					<Title level={1}>{post.title}</Title>
					<Text>Author: {post.author.name}</Text>
					<Text>Date: {format(new Date(post.date), 'MMMM Mo, yyyy')}</Text>
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
