export const metadata = {
  title: "Home ",
};

const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
