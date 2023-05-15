import useTodoStore from "@/store/todoStore";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type TodoFormProps = {
  todo: string;
};

const TodoForm = () => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormProps>();

  const todoStore = useTodoStore((state) => state);
  const { addTodo, newTodo, setNewTodo } = todoStore;

  const handleAddTodo = handleSubmit(() => {
    addTodo();
    toast({
      title: "New todo added.",
      status: "success",
      position: "top",
      isClosable: true,
    });
  });

  return (
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
            value={newTodo}
            onChange={(e) => setNewTodo(e.currentTarget.value)}
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
  );
};

export default TodoForm;
