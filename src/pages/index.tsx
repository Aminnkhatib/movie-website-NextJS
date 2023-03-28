import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const trendingTypes = {};

const topRatedTypes = {};

type MovieData = {
  name: string;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export const getServerSideProps = async () => {
  const trending = fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.key}`
  ).then((data) => data.json());

  const topRated = fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.key}&language=en-US&page=1`
  ).then((data) => data.json());

  const nowPlaying = fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.key}&language=en-US&page=1`
  ).then((data) => data.json());

  const response = await Promise.all([trending, topRated, nowPlaying]);

  return {
    props: {
      trending: response[0].results.slice(0, 2),
      topRated: response[1].results,
      nowPlaying: response[2].results,
    },
  };
};

type HomeProps = {
  trending: MovieData[];
  topRated: MovieData[];
  nowPlaying: MovieData[];
};

export default function Home({ trending, topRated, nowPlaying }: HomeProps) {
  // experiment i första sidan ta bort när du är klar

  return (
    <div>
      <div className={styles.trending}>
        {trending.map((data) => (
          <BigCard
            key={data.id}
            // database missing title in some movies
            cardTitle={data.title || data.name}
            cardUnderTitle={data.release_date}
            src={data.poster_path}
          />
        ))}
      </div>
    </div>
  );
}
