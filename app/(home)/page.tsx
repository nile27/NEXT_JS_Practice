import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_url } from "../constants";

export const metadata = {
  title: "Home ",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_url);
  const json = await res.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          id={item.id}
          poster_path={item.poster_path}
        ></Movie>
      ))}
    </div>
  );
}

/*
데이터 흐름
<Loding />
const html = await HomePage();
isLoding ? <Loding /> : html
*/
