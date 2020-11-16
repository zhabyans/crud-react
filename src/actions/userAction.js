import axios from 'axios';

export const getUsersList = () => {
    return dispatch => {
        // AMBIL DATA DARI API
        axios.get('https://5fb1dc2087ed490016ea8236.mockapi.io/users')
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

export const getUsersDetail = id => {
    return dispatch => {
        // AMBIL DATA DARI API
        axios.get('https://5fb1dc2087ed490016ea8236.mockapi.io/users/' + id)
            .then(function (response) {
                // JALANKAN DISPATCH
                dispatch({
                    type: "GET_USERS_DETAIL",
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: "GET_USERS_DETAIL",
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            });
    }
}

export const postUserCreate = data => {
    return dispatch => {
        // AMBIL DATA DARI API
        axios.post('https://5fb1dc2087ed490016ea8236.mockapi.io/users', data)
            .then(function (response) {
                // JALANKAN DISPATCH
                dispatch({
                    type: "POST_USER_CREATE",
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: "POST_USER_CREATE",
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            });
    }
}

export const putUserUpdate = (data, id) => {
    return dispatch => {
        // AMBIL DATA DARI API
        axios.put('https://5fb1dc2087ed490016ea8236.mockapi.io/users/' + id, data)
            .then(function (response) {
                // JALANKAN DISPATCH
                dispatch({
                    type: "PUT_USER_EDIT",
                    payload: {
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch(function (error) {
                dispatch({
                    type: "PUT_USER_EDIT",
                    payload: {
                        data: false,
                        errorMessage: error.message
                    }
                })
            });
    }
}

export const deleteUser = id => {
    return dispatch => {
        // AMBIL DATA DARI API
        axios.delete('https://5fb1dc2087ed490016ea8236.mockapi.io/users/' + id)
            .then(function (response) {
                // JALANKAN DISPATCH
                console.log(response.status);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const deleteDataUser = () => {
    return dispatch => {
        // AMBIL DATA DARI API
        dispatch({
            type: "GET_USERS_DETAIL",
            payload: {
                data: false,
                errorMessage: false
            }
        })
        dispatch({
            type: "POST_USER_CREATE",
            payload: {
                data: false,
                errorMessage: false
            }
        })
    }
}

