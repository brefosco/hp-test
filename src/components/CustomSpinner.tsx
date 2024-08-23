import { Box, Spinner } from "@chakra-ui/react";

const CustomSpinner = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
  >
    <Spinner size="xl" />
  </Box>
);

export default CustomSpinner;
