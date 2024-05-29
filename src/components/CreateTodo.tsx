import { Button, Flex, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, useState } from "react";

interface CreateTodo {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodo> = ({ todos, setTodos }) => {
  const [content, setContent] = useState<string>("");
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1].id
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleClick = () => {
    if (!content) return;
    setTodos((todos) => [
      ...todos,
      { id: currentTodoId + 1, content, isDone: false },
    ]);
    setCurrentTodoId(currentTodoId + 1);
    setContent("");
  };
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      padding={4}
      gap={2}
      bgColor="gray.200"
      h={32}
    >
      <Input bgColor={"white"} value={content} onChange={handleChange} />
      <Button bgColor={"gray.400"} onClick={handleClick}>
        &#43;
      </Button>
    </Flex>
  );
};

export default CreateTodo;
