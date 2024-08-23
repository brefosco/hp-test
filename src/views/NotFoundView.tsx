import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const NotFoundView: React.FC = () => {
  return (
    <Box maxW="container.xl" mx="auto" p={4} textAlign="center">
      <Heading mb={4}>404 - Not Found</Heading>
      <Text>The page you are looking for does not exist.</Text>
    </Box>
  );
};

export default NotFoundView;
