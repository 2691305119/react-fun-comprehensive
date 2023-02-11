const searchList = (initState = {}, action) => {
    switch (action.type) {
        case 'SEARCHLIST' :
            console.log(action.payload)
            return {...initState,...action.payload}
        default :
            return initState
    }
}

export default  searchList