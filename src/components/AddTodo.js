import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react/cjs/react.development";
import { TodoContext } from "../state/TodoProvider";

export function AddTodo() {
    const { addTodo } = useContext(TodoContext)
    let [content, setContent] = useState("")
    let inputRef = useRef(null)
    const toast = useToast()

    useEffect(
        () => {
            inputRef.current.focus()
        }, []
    )

    const handleSubmit = e => {
        e.preventDefault()
        if (!content) {
            toast({
                description: "Please input task",
                isClosable: true,
                duration: 2000,
                status: 'error',
                position: 'top-right'
            })
        } else {
            const todo = {
                id: nanoid(),
                text: content,
                isChecked: false
            }
            addTodo(todo)
            setContent('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt={10}>
                <Input
                    ref={inputRef}
                    type="text"
                    variant="outline"
                    value={content}
                    onChange={
                        e => {
                            e.preventDefault()
                            setContent(e.target.value)
                        }
                    }
                />
                <Button colorScheme="orange" type="submit">
                    Add task
                </Button>
            </HStack>

        </form>
    )

}