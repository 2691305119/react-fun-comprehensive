import React from "react";
import GetRoutes from "./route";
import { useLocation,useNavigate } from "react-router-dom";
import { styled } from '@mui/material';
import { AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import SearchBar from "./components/SearchBar";
import { useDispatch } from "react-redux";
import { inputText } from "./store/actions";

const Container = styled('div')(({ theme }) => ({
  background: '#f8f6ea',
  width: '100%',
  height: '100%',
  display: "flex",
  flexDirection: 'column',
  justifyItems: 'flex-start'
}))

function App() {

  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const topSearchBar = () => {
    return location.pathname == '/' ? <></> : <SearchBar />;
  }

  const onGoHome = () => {
    dispatch(inputText(''))
    navigate('')
  }

  return (
    <Container>
      <Box>
        <AppBar position="static" style={{ height: '60px', backgroundColor: '#f8f6ea', boxShadow: 'none', borderBottom: '1px solid #e1e0dc' }}>
          <Toolbar >
            <Box mx={2} flex onClick={() => onGoHome()}>
              <Typography
                variant="h6"
                noWrap
                component="span"
                color="#000000"
              >
                Best
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="span"
                color="#000000"
                fontWeight={200}
              >
                Search
              </Typography>
            </Box>
            {topSearchBar()}
          </Toolbar>
        </AppBar>
      </Box>
      <GetRoutes />
    </Container>
  );
}

export default App;
