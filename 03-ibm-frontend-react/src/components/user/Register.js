import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Username already exists!`);
            });

    };

    return (
        <>
        <div className="container mt-3">
            <h1  class="bg-primary text-light p-3">Register Component</h1>
            <p >Register here</p>
            
            <form className="form form-group mx-2 py-2 my-2 py-2"  onSubmit={handleRegisterSubmit}>
            <div iv className="col-4">
                <input  className="form form-group mx-2 py-2 my-2 py-2 form-control " type="text" name="username" placeholder="Enter your name" value={registerData.username}
                    onChange={handleChange} autoFocus required  />
                <br />
                <input className="form form-group mx-2 py-2 my-2 py-2 form-control "  type="password" name="password" placeholder="Password" value={registerData.password}
                    onChange={handleChange} required />
                <br />
                <input className="form-control btn btn-outline-light" type="submit" value="Register" /></div>
            </form></div>
            <>
                <p>{afterRegisterMessage && afterRegisterMessage} </p>
            </>
            <p className="container mt-3">Already registered? <Link to={'/login'}>Login</Link> </p>

        </>
    );
};
export default Register;




