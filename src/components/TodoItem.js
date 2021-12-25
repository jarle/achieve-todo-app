import { Checkbox, HStack, IconButton, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { FaTrash } from 'react-icons/fa';
import { TodoContext } from "../state/TodoProvider";

export function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useContext(TodoContext)
    console.log(todo)

    const toggleItem = e => {
        toggleTodo(todo.id)
    }
    const deleteItem = e => {
        deleteTodo(todo.id)
    }

    return (
        <HStack>
            <Checkbox isChecked={todo.isChecked} onChange={toggleItem} >
                <Text as={todo.isChecked ? 's' : ''}> {todo.text} </Text>
            </Checkbox>
            <Spacer />
            <IconButton
                icon={<FaTrash />}
                aria-label=''
                isRound
                onClick={deleteItem}
            />
        </HStack>

    )
}