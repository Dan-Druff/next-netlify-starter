import React,{useEffect,useState} from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/router';

// export function withPublic(Component){
//     return function WithPublic(props){
//         // Should be when user is NOT logged in

//         const {currentUser} = useAuth();
      
//         console.log("Auth.user: ", currentUser);
//         useEffect(() => {
//             console.log("WithPublic UE STart");
//             return () => {
//                console.log("WithPublic UE Cleanup");
//             }
//         }, [])

//         if(currentUser){
//             const router = useRouter();
//             router.push('/dashboard');
//             return <h2>Loading...</h2>
//         }
//         return <Component {...props} />;

//     }
// }
// export function withProtected(Component){
//     return function WithProtected(props){
//         // Should be when user IS logged in
//         if(typeof window !== 'undefined'){
//             // checked if were on client or server

//         }
       
//         const {currentUser} = useAuth();
//         console.log("Auth.user: ", currentUser);
        
//         if(currentUser){
//             const router = useRouter();
//             router.push('/login');
//             return <h2>Loading...</h2>
//         }
//         return <Component {...props} />;

//     }
// }
// export function withPublic (WrappedComponent){
//     return (props) => {
//         if(typeof window !== 'undefined'){
//             const Router = useRouter();
//             const {currentUser} = useAuth();
//             if(currentUser === null){
//                 return <WrappedComponent {...props} />;
//             }else{
//                 Router.replace("/dashboard");
//                 return null;
//             }
//         }else{
//             return <h2>LOADING......</h2>;
//         }
//     }
// }
export const getWithPublic = (WrappedComponent) => {
    return (props) => {
        const Router = useRouter();
        const [verified,setVerified] = useState(false);

        useEffect(async() => {
            const {currentUser} = useAuth();
            if(currentUser !== null){
                Router.replace('/dashboard');
            }else{
                setVerified(false);
            }
            return () => {
                console.log("GWP UE Cleanup");
            }
        }, [])

        if(verified){
            return <WrappedComponent {...props} />;
        }else{
            return null;
        }
    }
}
export const getWithAuth = (WrappedComponent) => {
    return (props) => {
        const Router = useRouter();
        const [verified,setVerified] = useState(false);

        useEffect(async() => {
            const {currentUser} = useAuth();
            if(currentUser === null){
                Router.replace('/login');
            }else{
                setVerified(true);
            }
            return () => {
                console.log("GWA UE Cleanup");
            }
        }, [])

        if(verified){
            return <WrappedComponent {...props} />;
        }else{
            return null;
        }
    }
}
// export function withAuth (WrappedComponent){
//     return (props) => {
//       // checks whether we are on client / browser or server.
//       if (typeof window !== "undefined") {
//         const Router = useRouter();
//         const {currentUser} = useAuth();
//         if(currentUser === null){
//             Router.replace("/login");
//             return null;
//         }else{
//             return <WrappedComponent {...props} />;
//         }
  
//       }else{
//           return <h2>LOADING......</h2>;
//       }

//     };
//   };

  
