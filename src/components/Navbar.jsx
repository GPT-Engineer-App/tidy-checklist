import { Box, Flex, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading as="h1" size="lg" color="white">
          Todo App
        </Heading>
      </Flex>
    </Box>
  );
};

export default Navbar;