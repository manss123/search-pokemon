import { describe } from "node:test";
import { getPokemonType } from "./getPokemonType";

const bulbasaur = {
  name: "Bulbasaur",
  types: ["Grass", "Poison"],
};

const charmander = {
  name: "Charmander",
  types: ["Fire"],
};

const squirtle = {
  name: "Squirtle",
  types: ["Water"],
};


describe("Pokemon Type Test", () => {
  test("Bulbasaur should be Grass and Poison type", () => {
    expect(getPokemonType(bulbasaur)).toEqual(["Grass", "Poison"]);
  });

  test("Charmander should be Fire type", () => {
    expect(getPokemonType(charmander)).toEqual(["Fire"]);
  });

  test("Squirtle should be Water type", () => {
    expect(getPokemonType(squirtle)).toEqual(["Water"]);
  });
});