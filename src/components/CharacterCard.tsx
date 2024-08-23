import React from "react";
import { Box, Image, Text, Button, Skeleton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Character, House } from "../types";
import { getHouseColors } from "../utils/houseUtils";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../hooks/useFavorites";

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  const { primary } = getHouseColors(character.house as House);
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  const toggleFavorite = () => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character.id);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      _hover={{ boxShadow: "xl" }}
      transition="box-shadow 0.2s"
    >
      <Link to={`/character/${character.id}`}>
        {character.image ? (
          <Image
            src={character.image}
            alt={character.name}
            boxSize="350px"
            objectFit="cover"
          />
        ) : (
          <Skeleton boxSize="350px" />
        )}
        <Box px={4} pt={4}>
          <Text fontSize="xl" fontWeight="bold">
            {character.name}
          </Text>
          {character.house ? (
            <Text>House: {character.house}</Text>
          ) : (
            <Box mt={6} />
          )}
        </Box>
      </Link>
      <Box px={4} pb={4} borderBottom={`4px solid ${primary.split(".")[0]}`}>
        <Button onClick={toggleFavorite}>
          {favorites.includes(character.id) ? (
            <MdFavorite data-testid="unfavorite-icon" color="red" />
          ) : (
            <MdFavoriteBorder data-testid="favorite-icon" color="red" />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default CharacterCard;
