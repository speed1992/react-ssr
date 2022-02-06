export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, api) => {
    try {
        const res = await api.get('/users');
        dispatch({
            type: FETCH_USERS,
            payload: res
        })
    }
    catch (e) {

    }

}

//https://react-ssr-api.herokuapp.com