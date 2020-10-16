export interface Post {
	content: string;
	author: PostAuthor;
	title: string;
	date: string;
	slug: string;
}

interface PostAuthor {
	name: string;
	picture: string;
}