import { StackDivider, VStack } from "@chakra-ui/react";
import { useContext } from "react";
import { TodoContext } from "../state/TodoProvider";
import { TodoItem } from "./TodoItem";


export function TodoList() {
    const { todos } = useContext(TodoContext)

    return (
        <VStack
            divider={<StackDivider />}
            w={'100%'}
            alignItems={"stretch"}
            p={5}
            spacing={10}
        >
            {todos.map(todo => <TodoItem todo={todo} />)}
        </VStack>
    )

}