import { API_url } from "../app/(home)/page";
async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${API_url}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movies = await getMovie(id);
  return <h6>{JSON.stringify(movies)}</h6>;
}
