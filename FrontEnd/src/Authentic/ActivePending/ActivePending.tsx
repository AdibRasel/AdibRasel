import { DeleteSure } from 'Common/SweetAlert/SweetAlert';
import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { MdAutoDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import { MdSave } from "react-icons/md";


const ActivePending = () => {


    async function handleDelete() {
        Swal.fire({
            title: "Are you sure!",
            text: "Are you sure you want to Pending it?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    const [selectedValue, setSelectedValue] = useState<string>('Active');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

const BackgroundColor = "red"

    return (<>

        <AuthenticLayout>

            <div className="CommonBG p-2 my-3 rounded" style={{ width: "40%", margin: "auto", textAlign: "center", color: "white" }}>
                <h5><b> Name All List </b></h5>
            </div>

            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Creator Email Address</th>
                            <th>Created Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rasel Hossain Adib</td>
                            <td>adibrasel.com@gmail.com</td>
                            <td>01/02/2024, 12:30 AM</td>
                            <td>
                                <select
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    style={{ backgroundColor: selectedValue === 'Active' ? 'green' : '#dc3545', color:"white" }}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </td>
                            <td>
                                <div className="d-flex justify-content-between">

                                    <NavLink to="/AuthenticUserProfile">
                                        <div className="AuthenticAction">
                                            <MdSave />
                                        </div>
                                    </NavLink>

                                    <div className="AuthenticActionDelete" onClick={handleDelete}>
                                        <MdAutoDelete />
                                    </div>




                                </div>
                            </td>
                        </tr>



                        <tr>
                            <td>2</td>
                            <td>Rasel Hossain Adib</td>
                            <td>adibrasel.com@gmail.com</td>
                            <td>01/02/2024, 12:30 AM</td>
                            <td>
                                <select
                                        className={`form-select form-select-sm`}
                                    aria-label=".form-select-sm example"
                                    style={{ backgroundColor: `${BackgroundColor}` }}
                                >
                                    
                                    <option value="Active">Active</option>
                                    <option selected value="Pending">Pending</option>
                                </select>
                            </td>
                            <td>
                                <div className="d-flex justify-content-between">

                                    <NavLink to="/AuthenticUserProfile">
                                        <div className="AuthenticAction">
                                            <MdSave />
                                        </div>
                                    </NavLink>

                                    <div className="AuthenticActionDelete" onClick={handleDelete}>
                                        <MdAutoDelete />
                                    </div>




                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Rasel Hossain Adib</td>
                            <td>adibrasel.com@gmail.com</td>
                            <td>01/02/2024, 12:30 AM</td>
                            <td>
                                <select
                                    className="form-select form-select-sm"
                                    aria-label=".form-select-sm example"
                                    value={selectedValue}
                                    onChange={handleChange}
                                    style={{ backgroundColor: selectedValue === 'Active' ? 'green' : '#dc3545', color:"white" }}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </td>
                            <td>
                                <div className="d-flex justify-content-between">

                                    <NavLink to="/AuthenticUserProfile">
                                        <div className="AuthenticAction">
                                            <MdSave />
                                        </div>
                                    </NavLink>

                                    <div className="AuthenticActionDelete" onClick={handleDelete}>
                                        <MdAutoDelete />
                                    </div>




                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>

            </div>


        </AuthenticLayout>


    </>)
}

export default ActivePending