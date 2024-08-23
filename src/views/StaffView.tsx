import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useStaff } from "../hooks/useCharacters";
import CharacterList from "../components/CharacterList";
import CustomSpinner from "../components/CustomSpinner";

const StaffView: React.FC = () => {
  const { data: staff, isLoading, error } = useStaff();

  if (isLoading) return <CustomSpinner />;
  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Box maxW="container.xl" mx="auto" p={4}>
      <Heading mb={6}>Staff</Heading>
      {staff && <CharacterList characters={staff} />}
    </Box>
  );
};

export default StaffView;
