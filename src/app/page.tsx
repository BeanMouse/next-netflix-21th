"use client";

import { Movie } from "@/types/movie";
import { useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) return;
      fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.results);
          setResults(data.results);
        });
    }, 500);

    return () => clearTimeout(timeout); // 이전 요청 제거
  }, [query]);

  return (
    <div>
      <input
        className="border"
        placeholder="Search movies"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((movie) => (
          <li key={movie.id} className="flex flex-col items-center">
            <p>{movie.title}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
