import React from 'react';
import auth from '../../firebase-init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [user] = useAuthState(auth)
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        console.log(error);
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <button onClick={() => signInWithGoogle()} type="button" className="btn btn-warning mt-4">Login</button>
        </div>
    );
};

export default Login;