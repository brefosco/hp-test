import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterList from "../components/CharacterList";
import CustomSpinner from "../components/CustomSpinner";

const AllCharactersView: React.FC = () => {
  const { data: characters, isLoading, error } = useCharacters();

  if (isLoading) {
    return <CustomSpinner />;
  }

  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Box maxW="container.xl" mx="auto" p={4}>
      <Heading mb={6}>All Characters</Heading>
      {characters && <CharacterList characters={characters} />}
    </Box>
  );
};

export default AllCharactersView;
