import { atom } from "recoil";
import { House } from "../types";

const getInitialFavorites = (): string[] => {
  const savedFavorites = localStorage.getItem("favoriteCharacters");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const getInitialPreferredHouse = (): House => {
  const savedHouse = localStorage.getItem("preferredHouse");
  return (savedHouse as House) || "Gryffindor";
};

export const favoriteCharactersState = atom<string[]>({
  key: "favoriteCharactersState",
  default: getInitialFavorites(),
});

export const preferredHouseState = atom<House>({
  key: "preferredHouseState",
  default: getInitialPreferredHouse(),
});
