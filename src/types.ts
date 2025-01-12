export type Video = {
	id: number;
	title: string;
	description: string;
	file: string;
	thumbnail: string;
	likes: number;
	dislikes: number;
};
export interface Comment {
	created_at: string;
	content: string;
}
