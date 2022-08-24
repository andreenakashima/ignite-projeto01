import styles from "./Post.module.css";

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/andreenakashima.png"
					/>
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
		</article>
	);
}
