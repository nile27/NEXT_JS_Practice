import { API_url } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";
export async function getMovie(id: string) {
  const res = await fetch(`${API_url}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movies.poster_path} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movies.title}</h1>
        <h3>⭐️ {movies.vote_average.toFixed(1)}</h3>
        <p>{movies.overview}</p>
        <a href={movies.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
