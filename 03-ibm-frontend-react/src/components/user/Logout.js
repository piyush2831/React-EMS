import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';
import { useState } from "react";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [afterLogout, setAfterLogout] = useState('');

    const logoutSubmit = () => {
        console.log('logoutSubmit');
        setAfterLogout(`You've logged out successfully!`);
        setTimeout(() => {
            dispatch(userLogout());
            navigate('/login');
        }, 2000);

    };

    return (
        <div className="container text-center mt-5">
            <h1 className="bg-warning text-black rounded-pill p-3 mb-4">Logout</h1>
            <button onClick={logoutSubmit} className="btn btn-danger w-50 mb-4">Logout</button>
            {afterLogout && <p>{afterLogout}</p>}
        </div>
    );
};

export default Logout;


