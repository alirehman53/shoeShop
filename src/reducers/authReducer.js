const initState = {
    errorAuth: null
}

const authenticationReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNIN_ERROR':
            console.log('error in signin ');
            return {
                ...state,
                errorAuth: 'Signin failed'
            }
        case 'SIGNIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                errorAuth: 'Signin Successfull'
            }
        case 'LOGOUT_SUCCESS':
            console.log('success');
            return {
                ...state,
                errorAuth: null
            }
        case 'SUCCESS_SIGNUP':
            console.log('successful signUp')
            return {
                ...state,
                errorAuth: 'Signup Successfull'
            }

        case 'ERROR_SIGNUP':
            console.log('error in signup ')
            return {
                ...state,
                errorAuth: action.error.message
            }

        default:
            return state
    }
};

export default authenticationReducer;