import React from "react";
import { Box, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { House } from "../types";
import { preferredHouseState } from "../recoil/atoms";
import { getHouseEmblem, getHouseColors } from "../utils/houseUtils";

const houses: House[] = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

const HouseSelector: React.FC = () => {
  const setPreferredHouse = useSetRecoilState(preferredHouseState);
  const currentHouse = useRecoilValue(preferredHouseState);
  const navigate = useNavigate();
  const { primary } = getHouseColors(currentHouse);

  const handleHouseSelect = (house: House) => {
    setPreferredHouse(house);
    localStorage.setItem("preferredHouse", house);
    navigate(`/house/${house.toLowerCase()}`);
  };

  return (
    <Box p={8} bg={primary} minH="100vh">
      <Text fontSize="2xl" mb={4} textAlign="center" color="white">
        Select your house:
      </Text>
      <SimpleGrid columns={[2, null, 4]} spacing={8}>
        {houses.map((house) => (
          <Box
            key={house}
            onClick={() => handleHouseSelect(house)}
            cursor="pointer"
            textAlign="center"
            _hover={{ transform: "scale(1.10)" }}
            transition="transform 0.2s"
            bg="white"
            borderRadius="md"
            p={4}
          >
            <Image
              src={getHouseEmblem(house)}
              alt={house}
              boxSize="150px"
              mx="auto"
              mb={2}
            />
            <Text fontSize="xl">{house}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HouseSelector;
