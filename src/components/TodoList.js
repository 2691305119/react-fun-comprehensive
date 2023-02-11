import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useDispatch, useSelector } from 'react-redux';
import { searchAsync } from '../store/actions';
import { useParams } from 'react-router';
import LineChart from './LineChart';

const TodoList = props => {

  const dispatch = useDispatch()

  const params = useParams()

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    const payload = {
      search_phrase: params.keyword
    }
    await dispatch(searchAsync(payload))
  }

  const { product_trends } = useSelector(state => state.searchList)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant='inherit'
        fontWeight={200}
        margin={theme => theme.spacing(1, 5)}
      >
        Related product trends
      </Typography>
      <Grid
        container
        spacing={0}
        sx={{
          '--Grid-borderWidth': '1px',
          '& > div': {
            border: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {[...Array((product_trends && product_trends.length) || 3)].map((_, index) => (
          <Grid margin={5} key={index} {...{ xs: 12, sm: 6, md: 4, lg: 1.8 }} minHeight={240} >
            <LineChart />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TodoList;