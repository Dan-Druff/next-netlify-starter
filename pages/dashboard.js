import {useEffect} from 'react';
import AuthRoute from "../HOC/authRoute"
import toast from 'react-hot-toast';

const dashboard = () => {
    useEffect(() => {
        console.log("UE DASHBOARD");
        toast('Welcome', {
            icon: '🌈',
          });
        return () => {
            console.log("Cleanp in dashboard");
        }
    }, [])
    return (
        <AuthRoute>
            <div>
              
                <h2>PRotected Dashboard</h2>
            </div>
        </AuthRoute>
    )
}

export default dashboard
