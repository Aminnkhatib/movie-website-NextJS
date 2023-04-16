// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const inputValue = req.query.inputValue;

  if (!process.env.key) {
    throw new Error("You're enviroment variable key is not available");
  }

  const search = await fetch(
    `https://api.themoviedb.org/3/search/movie?` +
      new URLSearchParams({
        api_key: process.env.key,
        language: "en-US",
        query: inputValue as string,
        page: "1",
      })
  ).then((res) => res.json());

  res.status(200).json(search);
}
