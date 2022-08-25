import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/andreenakashima.png" />

					<div className={styles.authorInfo}>
						<strong>Andre Nakashima</strong>
						<span>Developer</span>
					</div>
				</div>

				<time title="24 de Agosto às 15:51:00" dateTime="2022-08-24 15:51:00">
					Publicado a 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla
					vitae voluptas ducimus deleniti aliquam earum delectus quod, numquam
					voluptate optio placeat et iure? Animi, eaque. Ab eius quod
					accusantium!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla
					vitae voluptas ducimus deleniti aliquam earum delectus quod, numquam
					voluptate optio placeat et iure? Animi, eaque. Ab eius quod
					accusantium!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nulla
					vitae voluptas ducimus deleniti aliquam earum delectus quod, numquam
					voluptate optio placeat et iure? Animi, eaque. Ab eius quod
					accusantium!
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
