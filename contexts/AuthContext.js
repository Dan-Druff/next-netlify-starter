// import React, {useContext,useState,useEffect} from 'react';
// import {auth} from '../src/config/firebase.config'; 
// import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, updatePassword } from 'firebase/auth';
// const AuthContext = React.createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }

// export function AuthProvider({ children }){
//     const [currentUser, setCurrentUser] = useState(null);
//     const [loading, setLoading] = useState(false);

    
//     function signup(email,password){
//         return createUserWithEmailAndPassword(auth, email, password);
        
//     }
//     function login (email, password){
//         return signInWithEmailAndPassword(auth,email,password);
//     }
//     function logout(){
//         console.log("Calling logout from authcontext");
//         return signOut(auth);
//     }
//     function resetPassword(email){
//         return sendPasswordResetEmail(auth,email);
//     }

//     function changePassword(password){
        
//         console.log("AT UPDATE PASSWORD FUNC: ", password);
//         console.log("Users: ", auth.currentUser);
//         return updatePassword(auth.currentUser,password);

//     }

//     // useEffect(() => {

//     //     console.log("AuthContext useeffect");
//     //     const unsub = onAuthStateChanged(auth,(user) => {
//     //         if(user){
//     //             console.log("User is signed in.", user);          
               
//     //         }else{
//     //             console.log("User is signed out");
            
//     //         }
//     //         setCurrentUser(user);
//     //         setLoading(false);
//     //     })

//     //     return unsub;
//     // }, [])
//     useEffect(() => {
//             const unsub = onAuthStateChanged(auth,(user) => {
//             if(user){
//                 console.log("User is signed in.", user);          
               
//             }else{
//                 console.log("User is signed out");
            
//             }
//             setCurrentUser(user);
//             setLoading(false);
//         })
//     console.log("Auth UE START");
//     return () => unsub()
// }, [])
 

//     const value = {
//         currentUser,
//         login,
//         signup,
//         logout,
//         resetPassword,
//         changePassword
//     }
    
//     return (
//         <AuthContext.Provider value={value}>
//         {!loading && children}
//         </AuthContext.Provider>
//     )
// }
