import React from 'react'
import { NavLink } from 'react-router-dom'
// import ListGroup from 'react-bootstrap/ListGroup';

const Topic = () => {



    return (<>


        <div className="mt-sm-0 mt-md-0 mt-3 text-white SideMenu" style={{ padding: "10px", border: "1px solid #81689D", borderRadius: "10px" }}>
            <h2 className='text-center CommonColor' style={{ backgroundColor: "#82699e", padding: "5px", borderRadius: "10px 10px 1px 0px" }}>TOPIC</h2>
            <NavLink className="" to="/" style={{ textDecoration: "none", }}>
                <div className="" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                    Home
                </div>
            </NavLink>
            <NavLink className="" to="/GermanyLanguage" style={{ textDecoration: "none" }}>
                <div className="" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                    Germany Language
                </div>
            </NavLink>
            <NavLink className="" to="/contact" style={{ textDecoration: "none" }}>
                <div className="" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                    contact
                </div>
            </NavLink>
            <NavLink className="" to="/test" style={{ textDecoration: "none" }}>
                <div className="" style={{ padding: "10px", backgroundColor: "#1F2544", marginTop: "5px", borderRadius: "10px", cursor: "pointer" }}>
                    test
                </div>
            </NavLink>
        </div>





    </>)
}

export default Topic