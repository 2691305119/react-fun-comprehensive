import { Box } from '@mui/material';
import React from 'react';
import TodoList from '../TodoList';

const Search = () => {
  return (
    <Box flex={1} display='flex' justifyContent='center'>
      <TodoList/>
    </Box>
  )
}

export default Search;