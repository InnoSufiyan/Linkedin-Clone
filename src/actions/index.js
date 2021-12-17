import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, provider } from '../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { SET_USER } from './actionType';

export const setUser = (payload) => {
    return { 
        type: SET_USER,
        user: payload,
    }
}

export function signInAPI() {
    return (dispatch) => {
        signInWithPopup(auth, provider)
            .then((payload) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(payload);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = payload.user;
                console.log(payload)
                dispatch(setUser(payload.user))
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
                // ...
            });
    }

}
// export function signInAPI() {
//     return (dispatch) => {
//         auth.signInWithPopup(provider).then((payload) => {
//             console.log(payload)
//         }).catch((error) => {
//             alert(error.message)
//         })
//     }