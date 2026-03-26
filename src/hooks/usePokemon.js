import { useState } from "react";

export const usePokemon = (data) => {
  const [index, setIndex] = useState(0);

  const selectPokemon = (i) => {
    setIndex(i);
  };

  const next = () => {
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return {
    index,
    pokemon: data[index],
    selectPokemon,
    next,
    prev,
    isFirst: index === 0,
    isLast: index === data.length - 1,
  };
};
