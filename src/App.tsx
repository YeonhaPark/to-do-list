import { FC, useState } from "react";
import { Flex } from "@chakra-ui/react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "달리기",
    isDone: false,
  },
  {
    id: 2,
    content: "김밥 싸기",
    isDone: false,
  },
  {
    id: 3,
    content: "아보랑 놀기",
    isDone: false,
  },
];
const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);
  return (
    <Flex maxW="560px" marginX={"auto"} flexDir={"column"} minH={"100vh"}>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
