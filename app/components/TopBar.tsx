import useTodoStore from "@/store/todoStore";
import { Todo } from "@/util/type";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  IconButton,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const TopBar = () => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isFetchingTodos, setIsFetchingTodos] = useState(false);
  const todoStore = useTodoStore();
  const fetchTodos = async () => {
    try {
      setIsFetchingTodos(true);
      fetch(
        "https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json"
      )
        .then((resp) => resp.json())
        .then((todos: Todo[]) => todoStore.setTodos(todos));
    } catch (error) {
      toast({
        title: "Error fetching todos.",
        status: "error",
        position: "top",
        isClosable: true,
      });
    } finally {
      setIsFetchingTodos(false);
    }
  };

  return (
    <HStack spacing={2}>
      <IconButton
        aria-label="Toggle Dark Mode"
        variant="minimal"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
      <Button
        isLoading={isFetchingTodos}
        loadingText={"Fetching"}
        onClick={fetchTodos}
        variant="minimal"
      >
        Load JSON
      </Button>
    </HStack>
  );
};

export default TopBar;
