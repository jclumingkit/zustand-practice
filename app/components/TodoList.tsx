import useTodoStore from "@/store/todoStore";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import EmptyTodoList from "./EmptyTodoList";

const TodoList = () => {
  const toast = useToast();
  const todoStore = useTodoStore((state) => state);
  const { todos: todoList, toggleTodo } = todoStore;
  const pendingTodoList = todoList.filter((todo) => !todo.done);
  const completedTodoList = todoList.filter((todo) => todo.done);

  const handleChangeTodoStatus = (id: number) => {
    toggleTodo(id);
    toast({
      title: "Todo marked as completed.",
      status: "success",
      position: "top",
      isClosable: true,
    });
  };

  return (
    <Tabs isFitted>
      <TabList>
        <Tab>Pending</Tab>
        <Tab>Done</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <VStack spacing={4} align="stretch">
            {pendingTodoList.length > 0 ? (
              pendingTodoList.map((todo) => (
                <Card key={todo.id}>
                  <CardBody>
                    <Flex align="center">
                      <Checkbox
                        w="100%"
                        checked={todo.done}
                        onChange={() => handleChangeTodoStatus(todo.id)}
                      >
                        {todo.text}
                      </Checkbox>
                      <Spacer />
                      <Button>Edit</Button>
                    </Flex>
                  </CardBody>
                </Card>
              ))
            ) : (
              <EmptyTodoList />
            )}
          </VStack>
        </TabPanel>
        <TabPanel>
          <VStack spacing={4} align="stretch">
            {completedTodoList.length > 0 ? (
              completedTodoList.map((todo) => (
                <Card key={todo.id} variant="filled">
                  <CardBody>
                    <Text>{todo.text}</Text>
                  </CardBody>
                </Card>
              ))
            ) : (
              <EmptyTodoList />
            )}
          </VStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TodoList;
