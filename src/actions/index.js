import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, provider } from '../config/firebase';

// export function signUpAPI() {
//     return (dispatch) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 console.log('payload')
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 alert(errorCode , errorMessage)
//                 // ..
//             });
//     }
// }

export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((payload) => {
            console.log(payload)
        }).catch((error) => {
            alert(error.message)
        })
    }
}