import { getProductsList } from "../../api/searchApi"

export const inputText = val => {
    return {
        type:'ITEXT',
        payload: val
    }
}

export const productsList = val => {
    return {
        type:'SEARCHLIST',
        payload: val
    }
}

export const searchAsync = params => {
    return async dispatchEvent => {
        const res = await getProductsList(params)
        const {data} = res.data
        dispatchEvent(productsList(data))
    }
}