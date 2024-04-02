interface Pokemon {
    name: string;
    types: string[];
}

export const getPokemonType = (pokemon: Pokemon): string[] => {
    return pokemon.types;
}

