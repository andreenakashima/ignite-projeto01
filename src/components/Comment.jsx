import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
	return (
		<div className={styles.comment}>
			<img
				className={styles.avatar}
				src="https://github.com/andreenakashima.png"
			/>

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Andre Nakashima</strong>
							<time
								title="24 de Agosto às 15:51:00"
								dateTime="2022-08-24 15:51:00"
							>
								Cerca de 1h atras
							</time>
						</div>
						<button title="Deletar Comentario">
							<Trash size={20} />
						</button>
					</header>
					<p>Muito bom parabens</p>
				</div>

				<footer>
					<button>
						<ThumbsUp /> Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
