import { Flex } from "@chakra-ui/react";
import TodoCard from "./TodoCard";

const TodoList = () => {
  return (
    <Flex flexDir={"column"} gap={2} pt={8} alignItems={"center"} flexGrow={1}>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Flex>
  );
};

export default TodoList;
