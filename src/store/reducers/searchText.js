const searchText = (initState = '', action) => {
    switch (action.type) {
        case 'ITEXT' :
            return  action.payload
        default :
            return initState
    }
}

export default  searchText