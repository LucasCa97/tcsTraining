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
        const response = await fetch('https://reqres.in/api/users?page=2');
        const json = await response.json();

        dispatch({
            type: 'FETCH_DATA',
            payload: json.data
        })
    }
}