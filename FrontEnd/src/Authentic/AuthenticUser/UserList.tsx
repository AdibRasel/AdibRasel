import { DeleteSure } from 'Common/SweetAlert/SweetAlert';
import React from 'react'
import Table from 'react-bootstrap/Table';
import { FaEye } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { NavLink } from 'react-router-dom';


const UserList = () => {


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




    return (<>



        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Phon Number</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rasel Hossain Adib</td>
                        <td>adibrasel.com@gmail.com</td>
                        <td>01934544352</td>
                        <td>Active</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <NavLink to="/AuthenticUserProfile">
                                    <div className="AuthenticAction">
                                        <FaEye />
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
                        <td>01934544352</td>
                        <td>Active</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <NavLink to="/AuthenticUserProfile">
                                    <div className="AuthenticAction">
                                        <FaEye />
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
                        <td>01934544352</td>
                        <td>Panding</td>
                        <td>
                            <div className="d-flex justify-content-between">
                                <NavLink to="/AuthenticUserProfile">
                                    <div className="AuthenticAction">
                                        <FaEye />
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


    </>)
}

export default UserList