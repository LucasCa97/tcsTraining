export const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

export const logIn = () => {
    return{
        type: 'SIGN_IN'
    }
}

export const fetchData = () => {
    
    return async (dispatch, getState) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();

        dispatch({
            type: 'FETCH_DATA',
            payload: json
        })
    }
}