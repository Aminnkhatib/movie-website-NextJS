import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import BigCard from "@/components/cards/bigCard";
import Title from "@/components/title";
import SmallCard from "@/components/cards/smallCard";

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
  backdrop_path: string | null;
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
      topRated: response[1].results.slice(0, 6),
      nowPlaying: response[2].results.slice(0, 6),
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
      <Title titleText="Trending" />
      <div className={styles.trendingBigCards}>
        {trending.map((data) => (
          <BigCard
            key={data.id}
            // database missing title in some movies
            cardTitle={data.title || data.name}
            cardUnderTitle={data.release_date}
            src={data.backdrop_path}
          />
        ))}
      </div>
      <Title titleText="Now Playing" />
      <div className={styles.generalSmallCard}>
        {nowPlaying.map((data) => (
          <SmallCard key={data.id} src={data.poster_path} />
        ))}
      </div>

      <Title titleText="Top Rated" />
      <div className={styles.generalSmallCard}>
        {topRated.map((data) => (
          <SmallCard key={data.id} src={data.poster_path} />
        ))}
      </div>
    </div>
  );
}
