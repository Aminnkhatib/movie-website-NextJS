// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const genres = req.query.genres;

  if (!process.env.key) {
    throw new Error("You're enviroment variable key is not available");
  }

  const discover = await fetch(
    `https://api.themoviedb.org/3/discover/movie?` +
      new URLSearchParams({
        api_key: process.env.key,
        language: "en-US",
        sort_by: "popularity.desc",
        with_genres: genres as string,
      })
  ).then((data) => data.json());

  res.status(200).json(discover);
  console.log(genres);
}
