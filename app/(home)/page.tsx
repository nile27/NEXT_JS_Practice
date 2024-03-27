import Link from "next/link";

export const metadata = {
  title: "Home ",
};

export const API_url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch(API_url);
  const json = await res.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((item) => (
        <li>
          <Link href={`/movies/${item.id}`}>{item.title}</Link>
        </li>
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
