import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function App() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            {isLogin ? <Login /> : <Register />}
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Switch to Register' : 'Switch to Login'}
            </button>
        </div>
    );
}

export default App;
