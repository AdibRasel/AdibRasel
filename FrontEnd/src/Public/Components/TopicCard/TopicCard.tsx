import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import German from "../Carousel/GermanyLanguage.jpg"

import germern from "../Carousel/GermanyLanguage.jpg"
import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { CiRead } from "react-icons/ci";
import { FaBookReader } from "react-icons/fa";

const TopicCard = () => {
  return (<>

    <div className="mb-3" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-md-4">
          <img style={{width:"100%"}} src={germern} className='img-fluid' alt="" />
        </div>
        <div className="col-md-8">

          <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

          {/* <hr /> */}

          <div className="d-flex justify-content-start">
            <div className="text-muted">
              <FaEdit /> <span>Rasel Hossain Adib</span>
            </div>
            <div className="text-muted">
              
               - <MdOutlineDateRange/> <span>04/02/2024</span>
            </div>
          </div>

          <div className="text-muted">
            <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore esse exercitationem nostrum voluptates vitae, similique neque itaque optio reprehenderit.
            
            ...</span>
          </div>

          <Button size="sm" className='btn btn-dark mt-1'>See More <FaBookReader /></Button>

        </div>
      </div>
    </div>
    
    <div className="mb-3" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-md-4">
          <img style={{width:"100%"}} src={germern} className='img-fluid' alt="" />
        </div>
        <div className="col-md-8">

          <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

          {/* <hr /> */}

          <div className="d-flex justify-content-start">
            <div className="text-muted">
              <FaEdit /> <span>Rasel Hossain Adib</span>
            </div>
            <div className="text-muted">
              
               - <MdOutlineDateRange/> <span>04/02/2024</span>
            </div>
          </div>

          <div className="text-muted">
            <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore esse exercitationem nostrum voluptates vitae, similique neque itaque optio reprehenderit.
            
            ...</span>
          </div>

          <Button size="sm" className='btn btn-dark mt-1'>See More <FaBookReader /></Button>

        </div>
      </div>
    </div>

   
    <div className="mb-3" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-md-4">
          <img style={{width:"100%"}} src={germern} className='img-fluid' alt="" />
        </div>
        <div className="col-md-8">

          <h2 className='CommonColor fs-4'>This is Javascript pro</h2>

          {/* <hr /> */}

          <div className="d-flex justify-content-start">
            <div className="text-muted">
              <FaEdit /> <span>Rasel Hossain Adib</span>
            </div>
            <div className="text-muted">
              
               - <MdOutlineDateRange/> <span>04/02/2024</span>
            </div>
          </div>

          <div className="text-muted">
            <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias inventore esse exercitationem nostrum voluptates vitae, similique neque itaque optio reprehenderit.
            
            ...</span>
          </div>

          <Button size="sm" className='btn btn-dark mt-1'>See More <FaBookReader /></Button>

        </div>
      </div>
    </div>

   


  </>)
}

export default TopicCard