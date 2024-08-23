import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Image,
  Text,
  Grid,
  GridItem,
  Container,
  Divider,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useCharacter } from "../hooks/useCharacters";
import CustomSpinner from "../components/CustomSpinner";
import { getHouseColors } from "../utils/houseUtils";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useFavorites } from "../hooks/useFavorites";
import { House } from "../types";

const CharacterDetailsView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: characterData, isLoading, error } = useCharacter(id || "");
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (isLoading) return <CustomSpinner />;
  if (error) return <Box textAlign="center">Error: {error.message}</Box>;
  if (!characterData || characterData.length === 0)
    return <Box textAlign="center">Character not found</Box>;

  const character = characterData[0];
  console.log("getHouseColors(character.house as House).primary");
  console.log(getHouseColors(character.house as House).primary.split(".")[0]);

  const toggleFavorite = () => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character.id);
    }
  };

  const DetailItem = ({ label, value }: { label: string; value: string }) => (
    <GridItem>
      <Text fontWeight="bold">{label}:</Text>
      <Text>{value}</Text>
    </GridItem>
  );
  console.log(character);

  return (
    <Container maxW="container.md" py={8}>
      <Box
        borderWidth={1}
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        bg="white"
      >
        <Flex direction="column" align="center" bg="gray.100" p={4}>
          {character.image && (
            <Image
              src={character.image}
              alt={character.name}
              boxSize="150px"
              objectFit="cover"
              borderRadius="full"
              mb={4}
            />
          )}
          <Flex>
            <Heading as="h1" size="xl">
              {character.name}
            </Heading>
            <Button onClick={toggleFavorite} mt={1} ml={1}>
              {favorites.includes(character.id) ? (
                <MdFavorite color="red" />
              ) : (
                <MdFavoriteBorder color="red" />
              )}
            </Button>
          </Flex>
          {character.house && (
            <Badge
              colorScheme={
                getHouseColors(character.house as House).primary.split(".")[0]
              }
              mt={2}
            >
              {character.house}
            </Badge>
          )}
        </Flex>
        <Box p={6}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {character.species && (
              <DetailItem label="Species" value={character.species} />
            )}
            {character.dateOfBirth && (
              <DetailItem label="Date of Birth" value={character.dateOfBirth} />
            )}
            {character.ancestry && (
              <DetailItem label="Ancestry" value={character.ancestry} />
            )}
            {character.eyeColour && (
              <DetailItem label="Eye Color" value={character.eyeColour} />
            )}
            {character.hairColour && (
              <DetailItem label="Hair Color" value={character.hairColour} />
            )}
          </Grid>
          <Divider my={4} />
          {character.wand.wood &&
            character.wand.length &&
            character.wand.core && (
              <>
                <Text fontWeight="bold">Wand:</Text>
                <Text>
                  {character.wand?.wood} wood, {character.wand?.core} core,{" "}
                  {character.wand?.length} inches
                </Text>
                <Divider my={4} />
              </>
            )}
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {character.patronus && (
              <DetailItem label="Patronus" value={character.patronus} />
            )}
            {character.actor && (
              <DetailItem label="Actor" value={character.actor} />
            )}
            <DetailItem label="Alive" value={character.alive ? "Yes" : "No"} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default CharacterDetailsView;
