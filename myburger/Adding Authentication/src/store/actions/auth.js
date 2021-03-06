import * as actionTypes from './actionType'
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}
export const authTimeout = (expirationTime) => {
        return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }

}
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqhMrcIVUGTQRC8aXM1b8Gvnr1s6JTHZE'
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqhMrcIVUGTQRC8aXM1b8Gvnr1s6JTHZE'
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response)
                const expirationTime = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', response.data.idToken)
                localStorage.setItem('expirationDate', expirationTime)
                localStorage.setItem('userId', response.data.localId)
                dispatch(authSuccess(response.data.idToken, response.data.localId))
                dispatch(authTimeout(3600))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error))
            })
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type : actionTypes.SET_AUTH_REDIRECT_PATH,
        path : path
    }
}

export const autoCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            
            if(expirationDate < new Date()){
                dispatch(logout())
            }
            else{
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId))
                dispatch(authTimeout(expirationDate.getTime() - new Date().getTime()))
            }
        }
    }
}