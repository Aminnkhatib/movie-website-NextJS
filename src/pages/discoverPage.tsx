import SmallCard from "@/components/cards/smallCard";
import Title from "@/components/title";
import ToggleButton from "@/components/toggleButton";
import { useEffect, useState } from "react";
import styles from "@/styles/discover.module.scss";

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

export const getServerSideProps = async () => {
  const discover = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.key}&language=en-US&sort_by=popularity.desc`
  ).then((data) => data.json());

  const genres = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.key}&language=en-US`
  ).then((data) => data.json());

  return { props: { discover: discover.results, genres: genres.genres } };
};

type discoverData = {
  discover: MovieData[];
  genres: Genre[];
};

export default function DiscoverPage({ discover, genres }: discoverData) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [toggle, setToggle] = useState(false);
  const [movies, setMovies] = useState(discover);

  const handleSelectedGenreChange = async () => {
    const allGenres = selectedGenres.join(",");
    const filteredMovies = await fetch(
      "/api/discover?" +
        new URLSearchParams({
          genres: allGenres || "",
        })
    ).then((data) => data.json());
    setMovies(filteredMovies.results);
  };

  useEffect(() => {
    if (selectedGenres.length === 0) {
      return;
    }
    handleSelectedGenreChange();
  }, [genres, selectedGenres]);

  return (
    <div>
      <Title titleText="Discover" />

      {genres.map((data) => (
        <ToggleButton
          key={data.id}
          toggle={() =>
            setSelectedGenres((prev) => {
              if (prev.includes(data.id)) {
                return prev.filter((genre) => !(genre === data.id));
              } else {
                return [...prev, data.id];
              }
            })
          }
          genreName={data.name}
        />
      ))}

      <div className={styles.generalSmallCard}>
        {movies.map((data) => (
          <SmallCard
            key={data.id}
            src={data.poster_path}
            cardTitle={data.title || data.name}
            cardUnderTitle={data.release_date}
          />
        ))}
      </div>
    </div>
  );
}
