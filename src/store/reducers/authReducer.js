const initState = {
    authError: null
}
const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log("login failed")
            return{
                ...state,
                authError: 'login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null
            }
        default: 
            return state;
    }
}

export default authReducer