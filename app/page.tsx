"use client";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  IconButton,
  Input,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type TodoFormProps = {
  todo: string;
};

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    handleSubmit,
    register,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormProps>();

  const handleAddTodo = handleSubmit((values) => console.log(values));

  return (
    <Container mt={8}>
      <VStack spacing={8} align="stretch">
        <HStack spacing={2}>
          <IconButton
            aria-label="Toggle Dark Mode"
            variant="minimal"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
          <Button variant="minimal">Load JSON</Button>
        </HStack>
        <form onSubmit={handleAddTodo}>
          <Flex gap={4}>
            <FormControl isInvalid={getFieldState("todo").invalid} isRequired>
              <Input
                id="todo"
                placeholder="Add todo"
                {...register("todo", {
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                  maxLength: {
                    value: 50,
                    message: "Maximum length should be 50",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.todo && errors.todo.message}
              </FormErrorMessage>
            </FormControl>
            <Button w={24} type="submit" isLoading={isSubmitting}>
              Add
            </Button>
          </Flex>
        </form>
      </VStack>
    </Container>
  );
}
