import axios from "axios";
import { useState } from "react";
const DeleteEmp = () => {
    const [empData, setEmpData] = useState({ employeeId: '' });
    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
    }
    const handleSubmit =(evt)=>{
        evt.preventDefault();
        // confirm();
        axios.delete(`http://localhost:8090/emp/delete-emp/${empData.employeeId}`,empData, {
            withCredentials: true,
            crossOrigin: true,
          })
        .then((resp) => {
            if(resp.status===200)
            alert(`deleted successfully!`);
            setEmpData({ employeeId:'' });
        })
        .catch(error => {
            console.error("Error deleting employee:", error);
        });
    }
    return (
        <div className="container mt-3">
            <h1 className="rounded border border-dark text-white border-4 bg-danger  text-center py-3 mb-4">Delete Employee</h1>
            <div className="col-md-6 col-lg-4 mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="employeeId" className="form-label">Employee Id:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="employeeId"
                            name="employeeId"
                            value={empData.employeeId}
                            onChange={handleChange}
                            placeholder="Enter employee id"
                            required
                            autoFocus
                        />
                    </div>
                    <button className="btn btn-danger w-100">Delete Employee with ID</button>
                </form>
            </div>
        </div>
    );
    
}
export default DeleteEmp;
