import { useRecoilState } from "recoil";
import { favoriteCharactersState } from "../recoil/atoms";

export const useFavorites = () => {
  const [favorites, setFavorites] = useRecoilState(favoriteCharactersState);

  const addFavorite = (characterId: string) => {
    const updatedFavorites = [...favorites, characterId];
    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(updatedFavorites)
    );
  };

  const removeFavorite = (characterId: string) => {
    const updatedFavorites = favorites.filter((id) => id !== characterId);
    setFavorites(updatedFavorites);
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(updatedFavorites)
    );
  };

  const isFavorite = (characterId: string) => {
    return favorites.includes(characterId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
};
