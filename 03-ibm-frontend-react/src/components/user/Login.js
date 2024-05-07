import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <div className="container mt-3">
            <div className="w-50 rounded-3 bg-primary text-light text-center mx-auto p-4 border border-white border-4">
                <h1>Login Component</h1>
            </div>
            <p className="lead text-center mt-3">Log into your account here.</p>
            <div className="col-md-6 col-lg-4 container mt-3 mx-auto">
                <form className="form-group" onSubmit={handleLoginSubmit}>
                    <input
                        className="form-control mb-3"
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        value={loginData.username}
                        onChange={handleChange}
                        autoFocus
                        required
                    />
                    <input
                        className="form-control mb-3"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="btn btn-primary w-100"
                        type="submit"
                        value="Login"
                    />
                </form>
                <p className="text-center mt-3">
                    Not yet registered? <Link to={'/register'}>Register</Link>
                </p>
            </div>
            {afterSubmit && <p className="lead">{afterSubmit}</p>}
        </div>
    );
};
export default Login;

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import UserService from "../../services/UserService";
// import { useDispatch } from "react-redux";
// import { userLogin } from "../../redux/UserSlice";

// const Login = () => {

//     const [loginData, setLoginData] = useState({ username: '', password: '' });
//     const [afterSubmit, setAfterSubmit] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         setLoginData({
//             ...loginData,
//             [evt.target.name]: evt.target.value
//         });
//     };

//     const handleLoginSubmit = (evt) => {
//         evt.preventDefault();
//         console.log(loginData);
//         UserService.loginUser(loginData)
//             .then((response) => {
//                 console.log(response);
//                 setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
//                 setTimeout(() => {
//                     setLoginData({ username: '', password: '' });
//                     dispatch(userLogin(response));
//                     navigate('/profile');
//                 }, 2000);
//             })
//             .catch((error) => {
//                 console.log(error);
//                 setLoginData({ username: '', password: '' });
//                 setAfterSubmit(`Invalid credentials!`);
//             });
//     };

//     return (
//         <>
//             <h1 style={{ color: 'blue' }}>Login Component</h1>
//             <p>Login here</p>
//             <form onSubmit={handleLoginSubmit}>
//                 <input type="text" name="username" value={loginData.username}
//                     onChange={handleChange} autoFocus required />
//                 <br />
//                 <input type="password" name="password" value={loginData.password}
//                     onChange={handleChange} required />
//                 <br />
//                 <input type="submit" value="Login" />
//             </form>
//             {afterSubmit && <p>{afterSubmit}</p>}
//             <p>Not yet registered? <Link to={'/register'}>Register</Link> </p>
//         </>
//     );
// };
// export default Login;