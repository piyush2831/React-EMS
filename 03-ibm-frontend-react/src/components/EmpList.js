import axios from "axios";
import { useEffect, useState } from "react";
const EmpList = () => {
    const [empData, setEmpData] = useState('');
   
    useEffect(() => {
        console.log('usEffect');
        axios.get('http://localhost:8090/emp/get-all-emps')
            .then((resp) => {
                console.log(resp)
                setEmpData(resp.data)
            })
    }, []);
    return (
        <>
            <div>
                <h1 className=" border border-4 border-dark bg-primary-subtle  text-center text-black py-3 mb-4">Employee List</h1>
                <table className="container text-center">
                <thead className="row">
                    <th className="col" >id</th>
                    <th className="col" >Name</th>
                    <th className="col">salary</th>
                    <th className="col">aadhar</th>
                    <th className="col">email</th>
                </thead>
                <tbody>
                {empData && empData.map(emp => (
                        <tr className="row" key={emp.employeeId}>
                            <th className="col" >{emp.employeeId}</th>
                            <th className="col">{emp.firstName}</th>
                            <th className="col">{emp.salary}</th>
                            <th className="col">{emp.aadhar}</th>
                            <th className="col">{emp.email}</th>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </>
    );
}
export default EmpList;







