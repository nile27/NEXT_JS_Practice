import { API_url } from "../../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${API_url}/${id}`);
  return res.json();
}

async function getVideos(id: string) {
  console.log(`Fetching video: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${API_url}/${id}/videos`);
  return res.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  console.log("start fetching");
  const movie = await getMovie(id);
  const videos = await getVideos(id);
  console.log("end fetching");
  return <h1>{movie.title}</h1>;
}
