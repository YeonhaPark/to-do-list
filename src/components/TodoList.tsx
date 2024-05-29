import { Flex } from "@chakra-ui/react";
import TodoCard from "./TodoCard";
import { FC } from "react";

interface TodoList {
  todos: ITodo[];
}

const TodoList: FC<TodoList> = ({ todos }) => {
  return (
    <Flex flexDir={"column"} gap={2} pt={8} alignItems={"center"} flexGrow={1}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </Flex>
  );
};

export default TodoList;
