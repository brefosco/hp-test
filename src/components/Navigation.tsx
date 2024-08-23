import React from "react";
import { Flex, Link as ChakraLink, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { getHouseColors, getHouseEmblem } from "../utils/houseUtils";
import { useRecoilValue } from "recoil";
import { preferredHouseState } from "../recoil/atoms";

const Navigation: React.FC = () => {
  const preferredHouse = useRecoilValue(preferredHouseState);
  const navigate = useNavigate();
  const { primary } = getHouseColors(preferredHouse);

  const handleHouseClick = () => {
    navigate("/select-house");
  };

  return (
    <Flex width="100%" alignItems="center" bg={primary} py={4} px={8}>
      <Flex alignItems="center" gap={12}>
        <ChakraLink as={Link} to="/" color="white" fontWeight="bold">
          All Characters
        </ChakraLink>
        <ChakraLink as={Link} to="/students" color="white" fontWeight="bold">
          Students
        </ChakraLink>
        <ChakraLink as={Link} to="/staff" color="white" fontWeight="bold">
          Staff
        </ChakraLink>
        <ChakraLink
          as={Link}
          to={`/house/${preferredHouse.toLowerCase()}`}
          color="white"
          fontWeight="bold"
        >
          Characters in My House
        </ChakraLink>
      </Flex>
      <Flex marginLeft="auto">
        <Image
          src={getHouseEmblem(preferredHouse)}
          alt={preferredHouse}
          boxSize="50px"
          onClick={handleHouseClick}
          cursor="pointer"
          borderRadius="full"
        />
      </Flex>
    </Flex>
  );
};

export default Navigation;
