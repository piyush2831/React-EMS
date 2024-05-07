import { useState } from "react";
import axios from "axios";
const AddEmp = () => {
    const backendUrl = 'http://localhost:8090/emp/add-emp';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhar: '', salary: '' });
    const [errors, setErrors] = useState({});
    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
       
        if (evt.target.name === 'aadhar') {
            if (!/^\d{12}$/.test(evt.target.value)) {
                setErrors({ ...errors, [evt.target.name]: 'Aadhar number must have exactly 12 digits.' });
            }
        }
        // Validation for Email
        if (evt.target.name === 'email') {
            const isValidEmail = /\S+@\S+\.\S+/.test(evt.target.value);
            if (!isValidEmail) {
                setErrors({ ...errors, [evt.target.name]: 'Please enter a valid email address.' });
            }
        }
    };
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};
        if (empData.salary <= 0) {
            newErrors.salary = "Salary should be greater than 0.";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName}  added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };
    return (
        <div className="container mt-3">
            <h1 className="rounded border  border-dark border-4 bg-success text-white text-center py-3 mb-4">Add Employee Component</h1>
            <div className="col-md-6 col-lg-4 mx-auto">
                <form className="form-group" onSubmit={handleSubmit}>
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input
                        className="form-control mb-3"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={empData.firstName}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                        autoFocus
                    />
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        className="form-control mb-3"
                        type="email"
                        id="email"
                        name="email"
                        value={empData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                    {errors.email && <span className="text-danger">{errors.email}</span>}
                    <label htmlFor="aadhar" className="form-label">Aadhar:</label>
                    <input
                        className="form-control mb-3"
                        type="number"
                        id="aadhar"
                        name="aadhar"
                        maxLength={12}
                        minLength={12}
                        value={empData.aadhar}
                        onChange={handleChange}
                        placeholder="Enter Aadhar"
                    />
                    {errors.aadhar && <span className="text-danger">{errors.aadhar}</span>}
                    <label htmlFor="salary" className="form-label">Salary:</label>
                    <input
                        className="form-control mb-3"
                        type="number"
                        id="salary"
                        name="salary"
                        value={empData.salary}
                        onChange={handleChange}
                        placeholder="Enter salary"
                    />
                    {errors.salary && <span className="text-danger">{errors.salary}</span>}
                    <button className="btn btn-success w-100" type="submit">Add Employee</button>
                </form>
            </div>
        </div>
    );
    
};
export default AddEmp;




