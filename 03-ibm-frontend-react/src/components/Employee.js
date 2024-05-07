import AddEmployee from "./AddEmployee";
import EmpList from "./EmpList";
import DeleteEmp from "./delete";
import EmpById from "./employeebyid";
const Employee = () => {

    return (
        <div className="container mt-3">
            <h1 className="rounded border border-black text-center border-4  py-3 mb-4">Employee Component</h1>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            Add Employee
                        </div>
                        <div className="card-body">
                            <AddEmployee />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            Employee by ID
                        </div>
                        <div className="card-body">
                            <EmpById />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            Delete Employee
                        </div>
                        <div className="card-body">
                            <DeleteEmp />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            Employee List
                        </div>
                        <div className="card-body">
                            <EmpList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;


// import { useState } from "react";

// const Employee = () => {

//     // let firstName = ''; // does not work
//     const [firstName, setFirstName] = useState(''); // works

//     const handleNameInput = (evt) => {
//         console.log(evt.target.name);
//         console.log(evt.target.value);
//         // firstName = evt.target.value; // does not work
//         setFirstName(evt.target.value); // works
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee name is {firstName}.</p>
//             <form>
//                 <input type="text" name="firstName" value={firstName} onChange={handleNameInput} />
//             </form>
//         </>
//     );
// };

// export default Employee;

// const Employee = () => {

//     const employee = {
//         id: 101,
//         firstName: 'Sonu',
//         salary: 10.5,
//         isIndian: true,
//         phone: 98765544310 // ''
//     };

//     return (
//         <>
//             <h1>Employee Component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {employee.firstName}.</p>
//             <p>Employee salary is ₹{employee.salary}/-.</p>
//             <>
//                 {
//                     employee.phone &&
//                     <p>Employee primary phone is {employee.phone}.</p>
//                 }
//             </>
//         </>
//     );
// };

// export default Employee;


// const Employee = () => {

//     const salary = 50000;
//     const firstName = 'Sonu';

//     return (
//         <>
//             <h1>Employee component</h1>
//             <p>Employee component</p>
//             <p>Employee name is {firstName}.</p>
//             <p>Employee salary is ₹{salary}/-.</p>
//             <p>But the take home is ₹{salary - 10000}/-.</p>
//         </>
//     );
// };

// export default Employee;
