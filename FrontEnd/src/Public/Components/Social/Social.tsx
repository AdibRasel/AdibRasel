import React from 'react'
import { FaSearchPlus } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { ImStackoverflow } from "react-icons/im";
import { ImGoogle2 } from "react-icons/im";

const Social = () => {
  return (<>

    <h2 className='CommonColor fs-4 TitleColor'>Find Me <FaSearchPlus /></h2>

    <div className="mb-2">
      <a href="https://www.facebook.com/RaselHossainAdib" target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
          <div className="icon">
            <ImFacebook2 style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="p-2 ">
            Rasel Hossain Adib
          </div>
        </div>
      </a>
    </div>

    <div className="mb-2">
      <a href="https://www.linkedin.com/in/raselhossainadib/" target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
          <div className="icon">
            <ImLinkedin style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="p-2 ">
            Rasel Hossain Adib
          </div>
        </div>
      </a>
    </div>

    <div className="mb-2">
      <a href="https://github.com/AdibRasel" target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
          <div className="icon">
            <ImGithub style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="p-2 ">
            Rasel Hossain Adib
          </div>
        </div>
      </a>
    </div>

    <div className="mb-2">
      <a href="https://stackoverflow.com/users/18261117/rasel-hossain-adib" target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
          <div className="icon">
            <ImStackoverflow style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="p-2 ">
            Rasel Hossain Adib
          </div>
        </div>
      </a>
    </div>

    <div className="mb-2">
      <a href="https://www.google.com/search?q=Rasel+Hossain+Adib" target="_blank" rel="noopener noreferrer">
        <div className="d-flex justify-content-between border CommonColor SocialItem rounded" style={{ alignItems: 'center' }}>
          <div className="icon">
            <ImGoogle2 style={{ width: "40px", height: "40px" }} />
          </div>
          <div className="p-2 ">
            Rasel Hossain Adib
          </div>
        </div>
      </a>
    </div>






  </>)
}

export default Social