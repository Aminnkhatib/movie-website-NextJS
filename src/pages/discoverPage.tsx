import SmallCard from "@/Components/cards/smallCard";
import Title from "@/Components/title";
import ToggleButton from "@/Components/toggleButton";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import { GetStaticProps } from "next";

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

type Genre = {
  id: string;
  name: string;
};

export const getStaticProps: GetStaticProps = async () => {
  const discover = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.key}&language=en-US&sort_by=popularity.desc&limit=8`
  ).then((data) => data.json());

  const genres = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.key}&language=en-US`
  ).then((data) => data.json());

  return {
    props: {
      discover: discover.results.slice(0, 8),
      genres: genres.genres.slice(0, 8),
    },
  };
};

type discoverData = {
  discover: MovieData[];
  genres: Genre[];
};

export default function DiscoverPage({ discover, genres }: discoverData) {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movies, setMovies] = useState(discover);

  const handleSelectedGenreChange = async () => {
    const filteredMovies = await fetch(
      "/api/discover?" +
        new URLSearchParams({
          genres: selectedGenre,
        })
    ).then((data) => data.json());
    setMovies(filteredMovies.results.slice(0, 8));
  };

  useEffect(() => {
    if (selectedGenre !== "") handleSelectedGenreChange();
  }, [selectedGenre]);

  return (
    <div>
      <Title titleText="Discover" />
      <div className={styles.genreList}>
        {genres.map((data) => (
          <ToggleButton
            key={data.id}
            toggleActive={() => setSelectedGenre(data.id)}
            genreName={data.name}
            active={selectedGenre == data.id}
          />
        ))}
      </div>

      <div className={styles.smallCardContainer}>
        {movies.map((data) => (
          <SmallCard
            key={data.id}
            src={data.poster_path}
            cardTitle={data.title || data.name}
            cardUnderTitle={
              data.release_date && data.release_date.split("-")[0]
            }
          />
        ))}
      </div>
    </div>
  );
}
