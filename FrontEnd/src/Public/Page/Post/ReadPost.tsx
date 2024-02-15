import React from 'react'

import { FaEdit } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Germany from "../../Components/Carousel/GermanyLanguage.jpg"
import { NavLink } from 'react-router-dom';


const ReadPost = () => {
  return (<>


    {/* ========= Breadcrumb start ========== */}
    <div className='pb-2'>
      <NavLink to="/">
        <span className='text-muted'>Home</span>
      </NavLink>

      {" > "}

      <NavLink to="/Category">
        <span className='text-muted' >Category</span>
      </NavLink>

      {" > "}

      <span>Post</span>

    </div>
    {/* ========= Breadcrumb end ========== */}





    <div className="row">
      <div className="col-md-4">
        <img src={Germany} style={{ width: "100%", height: "250px" }} alt="" />

        <div className="d-flex justify-content-start">
          <div className="text-muted">
            <FaEdit /> <span>Rasel Hossain Adib</span>
          </div>
          <div className="text-muted">

            - <MdOutlineDateRange /> <span>04/02/2024</span>
          </div>
        </div>

      </div>
      <div className="col-md-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla error autem. Accusantium, necessitatibus adipisci expedita magnam optio amet praesentium minus nisi quo doloribus, ducimus aut repellat et neque. Quisquam voluptates ullam suscipit doloremque, provident nam laborum sunt quos quasi voluptatum eligendi blanditiis consequuntur aperiam, numquam impedit amet animi dolor deleniti dicta illum nemo nostrum pariatur exercitationem reprehenderit. Veritatis atque repellat recusandae? Assumenda minima nam saepe laborum excepturi sunt, aliquid culpa magnam sint explicabo corporis esse consequuntur blanditiis enim sapiente quis reiciendis, quos exercitationem eius facere quia. Veniam numquam culpa vel architecto labore, error adipisci quod odio dicta dolore facere quisquam, quia libero tenetur minima alias voluptate esse. Cumque ipsum atque error aspernatur blanditiis optio rem dolorem nisi accusamus, obcaecati voluptatem architecto totam maxime quasi ab ad labore odit nam. Officiis, esse a nostrum id illo repudiandae nisi illum amet harum obcaecati iusto consectetur autem porro repellendus molestiae reiciendis cumque. Est laborum explicabo voluptates aliquam iure inventore ullam sequi voluptatibus veritatis. Laborum quis quos at quod obcaecati, quisquam ea tempora! Repudiandae exercitationem ad odio dolorum? Est, aspernatur quam non soluta ipsum repellendus quia enim nihil totam voluptatem numquam eius amet asperiores provident. Quibusdam ipsa eius saepe necessitatibus illo, dicta animi!
        </p>
      </div>
    </div>







  </>)
}

export default ReadPost