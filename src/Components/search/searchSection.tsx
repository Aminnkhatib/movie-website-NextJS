import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.scss";
import SmallCard from "@/Components/cards/smallCard";
import { useSearch } from "@/hooks";
import Title from "../title";

export default function SearchPage() {
  const [data, setData] = useState<Array<any> | null>(null);
  const { search, setSearch } = useSearch();

  useEffect(() => {
    const handleSearch = () => {
      fetch(
        `/api/search?` +
          new URLSearchParams({
            inputValue: search,
          })
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data.results.slice(0, 6));
        });
    };
    // add timeout for fetch
    let timeOut: ReturnType<typeof setTimeout> | null = null;

    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(handleSearch, 600);
  }, [search]);

  return (
    <div className={styles.searchSectionContainer}>
      <Title titleText="Search" />
      <div className={styles.smallCardContainer}>
        {data &&
          data?.map((data) => (
            <SmallCard
              key={data.id}
              src={data.poster_path}
              cardTitle={data.title}
              cardUnderTitle={
                data.release_date && data.release_date.split("-")[0]
              }
            />
          ))}
      </div>
    </div>
  );
}
