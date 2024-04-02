"use client";

import { useQuery } from "@apollo/client";
import { GetPokemon } from "@/API/Query/pokemon";
import { notFound } from "next/navigation";
import { Fragment } from "react";
import TextDisplay from "../components/TextDisplay";
import ObjectDisplay from "../components/ObjectDisplay";
import ArrayDisplay from "../components/ArrayDisplay";
import HandleEvolutions from "../components/HandleEvolution";
import Image from "next/image";

export default function PokemonDetail({
  params,
}: {
  params: { pokemonName: string };
}) {
  let pokemonName = params.pokemonName;

  const { loading, error, data } = useQuery(GetPokemon, {
    variables: { name: pokemonName },
  });

  // Handle loading state
  if (loading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Handle data state
  if (data && data.pokemon) {
    const { pokemon } = data;
    return (
      <div className="flex flex-col items-center justify-center content-center">
        <div>
          <p className="topic-bg mt-10 text-center text-7xl p-8 text-emerald-50 rowdies-bold">
            {pokemon.name}
          </p>
        </div>
        <div className="m-10">
          <Image src={pokemon.image} alt={pokemon.name} width={220} height={220}/>
        </div>
        <TextDisplay topic="ID" pokemonData={pokemon.id} />
        <TextDisplay topic="Number" pokemonData={pokemon.number} />
        <ObjectDisplay topic="Weight" pokemonObject={pokemon.weight} />
        <ObjectDisplay topic="Height" pokemonObject={pokemon.height} />
        <TextDisplay topic="Classification" pokemonData={pokemon.classification} />
        <ArrayDisplay topic="Types" pokemonArray={pokemon.types} />
        <ArrayDisplay topic="Resistant" pokemonArray={pokemon.resistant} />
        <ArrayDisplay topic="Weaknesses" pokemonArray={pokemon.weaknesses} />
        <TextDisplay topic="FleeRate" pokemonData={pokemon.fleeRate} />
        <TextDisplay topic="MaxCP" pokemonData={pokemon.maxCP} />
        <TextDisplay topic="MaxHP" pokemonData={pokemon.maxHP} />
        <ObjectDisplay topic="Attacks" pokemonObject={pokemon.attacks} />
        <HandleEvolutions  evolutions={pokemon.evolutions} />
      </div>
    );
  }

  if (!data && !data.pokemon) {
    notFound();
  }

  return <p>No Pokémon found</p>;
}