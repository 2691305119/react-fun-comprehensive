import React, { useRef } from 'react';
import { styled, alpha } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system';
import { InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import { inputText } from '../store/actions';
import { searchAsync } from '../store/actions';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0.5, 1.5),
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '4px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#000000',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
    fontWeight: '200',
    '& .MuiInputBase-input': {
        // vertical padding + font size from searchIcon
        paddingLeft: `1em`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100ch',
            '&:focus': {
                width: '100ch',
                borderRadius: '5px',
            },
        },
    },
}));

const SearchBar = () => {

    const searchText = useSelector(state => state.searchText)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const inpRef = useRef(null)

    const onSearch = () => {
        if (inpRef.current.value == '') return
        const inpVal = inpRef.current.value
        dispatch(inputText(inpVal))
        const params = inpVal.replace(/ /g, '+')
        navigate(`/search/${params}`,{payload:{search_phrase: inpVal}})
    }

    return (
        <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Search>
                <StyledInputBase
                    sx={{ flex: 1 }}
                    placeholder="Search for new products 961K stores"
                    defaultValue={searchText}
                    inputRef={inpRef}
                />
            </Search>
            <SearchIconWrapper onClick={() => onSearch()}>
                <SearchIcon color='action' />
            </SearchIconWrapper>
        </Box>
    );
}

export default SearchBar

// const SearchBar = () => {


//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(inputText('输入'))
//     },[])

//     return (
//         <div>
//             {searchText}
//             <input></input>
//         </div>
//     )
// }

// export default SearchBar;