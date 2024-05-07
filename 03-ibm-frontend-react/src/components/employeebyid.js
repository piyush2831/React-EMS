import axios from "axios";
import { useState } from "react";
const EmpById = () => {
    const [empData, setEmpData] = useState("");
    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('submit');
        axios.get(`http://localhost:8090/emp/get-emp-by-id/${empData.employeeId}`, empData)
        .then((resp) => {
            console.log(resp);
            setEmpData(resp.data);
        })
        .catch(error => {
            console.log(error);
            throw new Error(error);
        });
    };
    return (
        <div className="container mt-3">
            <h1 className="rounded border border-black border-4 bg-warning  text-center text-black py-3 mb-4">Employee by Id</h1>
            <div className="col-md-6 col-lg-4 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="employeeId" className="form-label">Employee Id:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="employeeId"
                            name="employeeId"
                            value={empData ? empData.employeeId : ''}
                            onChange={handleChange}
                            placeholder="Enter employee id"
                            required
                        />
                    </div>
                    <button className="btn btn-warning w-100" type="submit">Get Employee with ID</button>
                </form>
            </div>
            <div>
                <h3>Employee</h3>
                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Aadhar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData &&
                            <tr>
                                <td>{empData.firstName}</td>
                                <td>{empData.salary}</td>
                                <td>{empData.aadhar}</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
    
}
export default EmpById;