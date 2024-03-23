import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';

import { TbSettingsUp } from "react-icons/tb";
import { NavLink } from 'react-router-dom';


const MultipleEmailSend = () => {
    const [messageValue, setMessageValue] = useState<string>(""); // Specify the type for messageValue

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };
    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    const toRef = useRef<HTMLTextAreaElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);









    const [CurrentEmail, SetCurreentEmail] = useState<string>("")
    const [CurrentPassword, SetCurreentPassword] = useState<string>("")


    useEffect(() => {

        const storedEmailData: any = localStorage.getItem('SendFromEmail');
        SetCurreentEmail(storedEmailData)


        const storedPasswordData: any = localStorage.getItem('NotCoding');
        SetCurreentPassword(storedPasswordData)

    }, []);




    const sendButtonHandler = () => {

        // ezbj bzbw ycos gfil





        const url = "http://localhost:5000/api/v1/MailSend";
        const to = toRef.current?.value || "";
        const subject = subjectRef.current?.value || "";

        // Replace each occurrence of "@gmail.com" with "@gmail.com,"
        const [formattedEmails] = to.replace(/@gmail\.com/g, "@gmail.com,").split(",");


        console.log(formattedEmails);



        const postBody = {
            CurrentEmail: CurrentEmail,
            CurrentPassword: CurrentPassword,
            to: formattedEmails,
            subject: subject,
            html: messageValue,
        };

        axios.post(url, postBody)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
                console.log("error")
            });
    };

    return (
        <>b mg     /.xctrrrrrrrrreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee j  
   
            <AuthenticLayout>




                <hr />
                <div className="container text-editor">
                    <div className="d-flex justify-content-between">
                        <p>Sender Email Address is: <b>adibrasel.2022@gmail.com</b></p>
                        <NavLink className="text-black" to="/EmailSetting">
                            <p>Email Setting <TbSettingsUp /></p>
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
                        modules={modules}
                        formats={formats}
                        className='AuthenticCategoryNewInput'
                    />
                    <div className="text-muted mt-2">
                        <button className='btn btn-primary' style={{ width: "100%" }} onClick={sendButtonHandler}>Send</button>
                    </div>
                </div>




            </AuthenticLayout>
        </>
    );
};

export default MultipleEmailSend;
