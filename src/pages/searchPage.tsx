import { useEffect, useState } from "react";
import { debounce } from "debounce";
import Layout from "@/components/layout";
import SmallCard from "@/components/cards/smallCard";
import Navigation from "@/components/navigation";
import Search from "@/components/search";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<Array<any> | null>(null);

  useEffect(() => {
    debounce(
      () =>
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.key}&language=en-US&query=${inputValue}&page=1&include_adult=false`
        )
          .then((res) => res.json())
          .then((data) => setData(data)),
      300
    );
    console.log(data);
  }, [data, inputValue]);

  return (
    <div>
      <Navigation />
      <Search input={inputValue} />
      <>
        {data &&
          data?.map((data) => <SmallCard key={""} cardCaption={""} src={""} />)}
      </>
    </div>
  );
}
