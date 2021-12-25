import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import TodoProvider from './state/TodoProvider';


function App() {
  return (
    <Container maxW='container.sm' padding={15} centerContent>
      <Heading>achieve</Heading>

      <TodoProvider>
        <TodoList />
        <AddTodo />
      </TodoProvider>

    </Container>
  );
}

export default App;
