import {
    GET_MESSAGE_OFYOU,
    LOGIN_IN,
    LOGIN_FAIL,
    LOGIN_OFF,
    LOGIN_SUCCESS
} from "../login/login_redux";
const defaultState = {
    login_in : false,
    login_off : true,
    login_fail : 0,
    login_success : 0,
    name : '',
    id : "111",
    token : '',
    indexPageChoose:0
};

export default function login(state = defaultState, action){
    switch(action.type){
        
        case GET_MESSAGE_OFYOU:
            return{
                ...state,
                name : action.payload.name,
                id : action.payload.id,
                token : action.payload.token
            }
        case LOGIN_IN:
            return {
                ...state,
                login_in : true,
                login_off : false,
                login_fail : 2,
                login_success : 2

        }
        case LOGIN_OFF:
            return{
                ...state,
                login_in : false,
                login_off : true,
                login_fail : 0,
                login_success : 0
        }
        
        case LOGIN_SUCCESS:
            return {
                ...state,
                login_in : true,
                login_off : false,
                login_fail : 0,
                login_success : 1
        }
        
        case LOGIN_FAIL:
            return{
                ...state,
                login_in :false,
                login_off : true,
                login_fail : 1,
                login_success : 0
        }
        
        default:
            return state;
    
    }
}