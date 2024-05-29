import { Button, Flex, Input } from "@chakra-ui/react";
import { FC } from "react";

const CreateTodo: FC = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      padding={4}
      gap={2}
      bgColor="gray.200"
      h={32}
    >
      <Input bgColor={"white"} />
      <Button bgColor={"gray.400"}>&#43;</Button>
    </Flex>
  );
};

export default CreateTodo;
