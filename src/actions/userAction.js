import axios from 'axios';

export const getUsersList = () => {
    return dispatch => {
        // AMBIL DATA DARI API
        axios.get('http://my-json-server.typicode.com/zhabyans/crud-react/users')
            .then(function (response) {
                // JALANKAN DISPATCH
                dispatch({
                    type: "GET_USERS_LIST",
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: "GET_USERS_LIST",
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            });
    }
}

