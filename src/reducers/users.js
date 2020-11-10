let initialState = {
    getUsersList: false,
    getErrorList: false,
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
        default:
            return state;
    }
}

export default users
