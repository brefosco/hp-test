import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useStudents } from "../hooks/useCharacters";
import CharacterList from "../components/CharacterList";
import CustomSpinner from "../components/CustomSpinner";

const StudentsView: React.FC = () => {
  const { data: students, isLoading, error } = useStudents();

  if (isLoading) return <CustomSpinner />;
  if (error) return <Box>Error: {error.message}</Box>;

  return (
    <Box maxW="container.xl" mx="auto" p={4}>
      <Heading mb={6}>Students</Heading>
      {students && <CharacterList characters={students} />}
    </Box>
  );
};

export default StudentsView;
