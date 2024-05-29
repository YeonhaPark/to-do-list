import { Button, Box, Flex, Input, Text } from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";

interface CreateTodo {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodo> = ({ todos, setTodos }) => {
  const [content, setContent] = useState<string>("");
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1]?.id || 0
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleClick = () => {
    if (!content) return;
    setTodos((todos) => {
      const arr = [...todos, { id: currentTodoId + 1, content, isDone: false }];
      localStorage.setItem("todos", JSON.stringify(arr));
      return arr;
    });
    setCurrentTodoId(currentTodoId + 1);
    setContent("");
  };
  return (
    <Box bgColor="gray.300" pt={4} paddingX={4} textAlign={"center"}>
      <Text fontSize="28" color="gray.800">
        <strong>To Do List</strong>
      </Text>

      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        padding={4}
        gap={2}
        h={32}
      >
        <Input bgColor={"white"} value={content} onChange={handleChange} />
        <Button bgColor={"gray.400"} onClick={handleClick}>
          &#43;
        </Button>
      </Flex>
    </Box>
  );
};

export default CreateTodo;
