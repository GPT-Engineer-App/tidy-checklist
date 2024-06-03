import { Container, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";

const Index = () => {
  return (
    <Container maxW="container.lg" p={0}>
      <Navbar />
      <VStack spacing={8} mt={8}>
        <TodoList />
      </VStack>
    </Container>
  );
};

export default Index;