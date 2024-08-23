import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useHouseCharacters } from "../hooks/useCharacters";
import CharacterList from "../components/CharacterList";
import CustomSpinner from "../components/CustomSpinner";

const HouseCharactersView: React.FC = () => {
  const { house } = useParams<{ house: string }>();
  const { data: characters, isLoading, error } = useHouseCharacters(house!);

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Box maxW="container.xl" mx="auto" p={4}>
      <Heading mb={6}>Characters in {house}</Heading>
      {characters && <CharacterList characters={characters} />}
    </Box>
  );
};

export default HouseCharactersView;
