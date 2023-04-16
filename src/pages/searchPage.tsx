import { useEffect, useState } from "react";
import styles from "@/styles/discover.module.scss";
import SmallCard from "@/components/cards/smallCard";
import useSearch from "@/hooks/useSearch";

export default function SearchPage() {
  const [data, setData] = useState<Array<any> | null>(null);
  const { search, setSearch } = useSearch();

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

  const handleSearch = () => {
    fetch(
      `/api/search?` +
        new URLSearchParams({
          inputValue: search,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        console.log(data);
      });
  };

  let timeOut: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(handleSearch, 600);
  }, [search]);

  return (
    <div className={styles.generalSmallCard}>
      {data &&
        data?.map((data) => (
          <SmallCard
            key={data.id}
            src={data.poster_path}
            cardTitle={data.title}
            cardUnderTitle={data.release_date}
          />
        ))}
    </div>
  );
}
