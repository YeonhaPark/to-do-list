import { FC } from "react";
import { Flex } from "@chakra-ui/react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
const App: FC = () => {
  return (
    <Flex flexDir={"column"} minH={"100vh"}>
      <CreateTodo />
      <TodoList />
    </Flex>
  );
};

export default App;
