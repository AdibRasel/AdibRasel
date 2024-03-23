import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import { NavLink } from 'react-router-dom';
import Email from "../AuthenticComment/Email.json";

const SingleEmailSend: React.FC = () => {
  const [messageValue, setMessageValue] = useState<string>("");
  const toRef = useRef<HTMLTextAreaElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const [currentEmail, setCurrentEmail] = useState<any>("");
  const [currentPassword, setCurrentPassword] = useState<any>("");
  const [allEmail, setAllEmail] = useState<string[]>([]); // Store emails in an array

  useEffect(() => {
    const storedEmailData: any = localStorage.getItem('SendFromEmail');
    setCurrentEmail(storedEmailData);

    const storedPasswordData: any = localStorage.getItem('NotCoding');
    setCurrentPassword(storedPasswordData);
  }, []);

  const UserOuth =()=>{
    const storedEmailData: any = localStorage.getItem('SendFromEmail');
    setCurrentEmail(storedEmailData);

    const storedPasswordData: any = localStorage.getItem('NotCoding');
    setCurrentPassword(storedPasswordData);
  }


  const sendButtonHandler = async () => {

    UserOuth()

    try {
      const url = "http://localhost:5000/api/v1/MailSend";
      const to = toRef.current?.value || "";
      const subject = subjectRef.current?.value || "";

      const promises = Email.map((email: any) => {
        const postBody = {
          CurrentEmail:currentEmail,
          CurrentPassword:currentPassword,
          to: email.props.review.username + "@gmail.com",
          subject,
          html: messageValue,
        };
        console.log(postBody);
        return axios.post(url, postBody);
      });
      await Promise.all(promises);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <AuthenticLayout>
      <hr />
      <div className="container text-editor">
        <div className="d-flex justify-content-between">
          <p>Sender Email Address is: <b>adibrasel.2022@gmail.com</b></p>
          <NavLink className="text-black" to="/EmailSetting">
            <p>Email Setting</p>
          </NavLink>
        </div>
        <div className="mb-2">
          <div className="">
            <label>To:</label>
            <textarea ref={toRef} className="form-control" id="To" rows={1}></textarea>
            <label>Subject:</label>
            <input ref={subjectRef} id='Subject' type="text" placeholder='Subject' className='form-control' style={{ width: "100%" }} />
          </div>
        </div>
        <span>Message:</span>
        <ReactQuill
          theme="snow"
          value={messageValue}
          onChange={setMessageValue}
          className='AuthenticCategoryNewInput'
        />
        <div className="text-muted mt-2">
          <button className='btn btn-primary' style={{ width: "100%" }} onClick={sendButtonHandler}>Send</button>
        </div>
      </div>
    </AuthenticLayout>
  );
};

export default SingleEmailSend;
