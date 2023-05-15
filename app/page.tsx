"use client";
import { Container, VStack } from "@chakra-ui/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TopBar from "./components/TopBar";

export default function Home() {
  return (
    <Container mt={8}>
      <VStack spacing={4} align="stretch">
        <TopBar />
        <TodoForm />
        <TodoList />
      </VStack>
    </Container>
  );
}
