import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash } from "react-icons/fi";

interface TodoProps {
  todo: ITodo;
}

const TodoCard: FC<TodoProps> = ({ todo }) => {
  return (
    <Flex gap={2} px={3} py={2} rounded="lg" alignItems={"center"}>
      <Text
        rounded={"lg"}
        p={2}
        border="solid"
        borderWidth={3}
        borderColor={"gray.100"}
        w={48}
        isTruncated={true}
        fontSize={16}
      >
        {todo.content}
      </Text>
      <Button colorScheme="blue" color="blue">
        <FiEdit3 />
      </Button>
      <Button colorScheme="red">
        <FiTrash />
      </Button>
    </Flex>
  );
};

export default TodoCard;
