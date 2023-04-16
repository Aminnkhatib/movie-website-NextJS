// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const discoverIds = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.key}&language=en-US`
  ).then((data) => data.json());

  res.status(200).json(discoverIds);
}
