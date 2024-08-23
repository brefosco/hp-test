import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { Character } from "../types";

interface Props {
  characters: Character[];
}

const CharacterList: React.FC<Props> = ({ characters }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </SimpleGrid>
  );
};

export default CharacterList;
