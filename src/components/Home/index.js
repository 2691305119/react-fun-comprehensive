import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProductsList } from '../../api/searchApi';
import { searchAsync } from '../../store/actions';
import SearchBar from '../SearchBar';

const Home = () => {

  const navigate = useNavigate()

  const searchText = useSelector(state => state.searchText)

  const dispatch = useDispatch()

  return (
    <Box
      display='flex'
      flex={1}
      alignItems='center'
      flexDirection='column'
    >
      <Typography
        variant='h3'
        color='#000000'
        fontWeight={200}
        marginTop={theme => theme.spacing(5)}
        marginBottom={theme => theme.spacing(5)}
      >
        Search Trends
      </Typography>
      <SearchBar />
    </Box>
  )
}

export default Home;