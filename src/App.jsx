import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/andreenakashima.png",
			name: "Andre Nakashima",
			role: "Desenvolvedor",
		},
		content: [
			{
				type: "paragraph",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque molestias excepturi expedita sequi animi ea beatae dolorum qui obcaecati odio suscipit vero error, fugiat nesciunt nam necessitatibus deleniti. Assumenda.",
			},
		],
		publishedAt: new Date("2022-08-24 20:00:00"),
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/mkioschi.png",
			name: "Mayko Kioschi",
			role: "Desenvolvedor",
		},
		content: [
			{
				type: "paragraph",
				content:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque molestias excepturi expedita sequi animi ea beatae dolorum qui obcaecati odio suscipit vero error, fugiat nesciunt nam necessitatibus deleniti. Assumenda.",
			},
		],
		publishedAt: new Date("2022-08-22 20:00:00"),
	},
];

export default function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return (
							<Post
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						);
					})}
				</main>
			</div>
		</div>
	);
}
