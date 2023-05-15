import { Center, Text } from "@chakra-ui/react";

const EmptyTodoList = () => {
  return (
    <Center mt={8}>
      <Text>You have 0 todos.</Text>
    </Center>
  );
};

export default EmptyTodoList;
