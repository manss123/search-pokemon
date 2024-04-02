"use client";
import { ChangeEvent, useState } from "react"
import { useRouter } from "next/navigation";
import classes from './SerachInput.module.css'

export default function SearchInput() {
  const router = useRouter();
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Pokemon Name: ", pokemonName);
    router.push(`/${pokemonName}`);
  };

  return (
    <div className="flex flex-col p-12">
      <input
        className="text-6xl m-8"
        type="text"
        name="pokemonName"
        id="pokemonName"
        placeholder="Pokemon Name"
        value={pokemonName}
        onChange={handleChange}
      />

      <button
        className={`${classes.button} text-md bg-lime-700`}
        type="submit"
        onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  );
}