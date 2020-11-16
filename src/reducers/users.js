let initialState = {
    getUsersList: false,
    getErrorList: false,
    getUsersDetail: false,
    getErrorDetail: false,
    getResponDataUser: false,
    getErrorResponDataUser: false,
    title: 'CRUD With React JS',
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS_LIST":
            return {
                ...state,
                getUsersList: action.payload.data,
                getErrorList: action.payload.errorMessage
            };
        case "GET_USERS_DETAIL":
            return {
                ...state,
                getUsersDetail: action.payload.data,
                getErrorDetail: action.payload.errorMessage
            };
        case "POST_USER_CREATE":
            return {
                ...state,
                getResponDataUser: action.payload.data,
                getErrorResponDataUser: action.payload.errorMessage
            };

        case "PUT_USER_EDIT":
            return {
                ...state,
                getResponDataUser: action.payload.data,
                getErrorResponDataUser: action.payload.errorMessage
            };
        default:
            return state;
    }
}

export default users
