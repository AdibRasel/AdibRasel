import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import { TbSettingsUp } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const MultipleEmailSend = () => {
    const [messageValue, setMessageValue] = useState<string>("");

    const toRef = useRef<HTMLTextAreaElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);

    const [currentEmail, setCurrentEmail] = useState<string>("");
    const [currentPassword, setCurrentPassword] = useState<string>("");
    const [Category, setCategory] = useState<string>("");

    useEffect(() => {
        const storedEmailData: any = localStorage.getItem('SendFromEmail');
        setCurrentEmail(storedEmailData);

        const storedPasswordData: any = localStorage.getItem('NotCoding');
        setCurrentPassword(storedPasswordData);

        const EmailCategory: any = localStorage.getItem('EmailCategory');
        setCategory(EmailCategory);
    }, []);

    const notify = () => toast('Here is your toast.');

    const sendButtonHandler = () => {
        const EmailSendURL = "http://localhost:5000/api/v1/MailSend";
        const CreateEmailSendURL = "http://localhost:5000/api/v1/CreateEmail";
        const to = toRef.current?.value || "";
        const subject = subjectRef.current?.value || "";

        const emailsArray = to.split("@gmail.com").filter(email => email.trim() !== "");
        const formattedEmails = emailsArray.map(email => email.trim() + "@gmail.com,");


        formattedEmails.forEach(formattedEmail => {

            // alert("Email Send Success = " + formattedEmail)
            toast.success("Email Send Success = " + formattedEmail)

            const PostBodyEmailSend = {
                CurrentEmail: currentEmail,
                CurrentPassword: currentPassword,
                to: formattedEmail,
                subject: subject,
                html: messageValue,
            };

            axios.post(EmailSendURL, PostBodyEmailSend)
                .then((res) => {
                    console.log(res);
                    // Perform any actions after successful POST request
                })
                .catch((err) => {
                    console.log(err);
                    console.log("error");
                });

            var EmailSingle = formattedEmail.replace(/,/, '');
            
            console.log(EmailSingle)

            const PostBodyEmailCreate = {
                Email: EmailSingle,
                Category: Category
            };


            axios.post(CreateEmailSendURL, PostBodyEmailCreate)
                .then((res) => {
                    console.log(res);
                    const Statust = res.data.status;
                    if (Statust === "success") {
                        toast.success("Email Save Success = " + EmailSingle)
                    } else {
                        toast.error("Email Not Saved, " + Statust + " = " + EmailSingle)
                    }
                    console.log(Statust)
                    // Perform any actions after successful POST request
                })
                .catch((err) => {
                    console.log(err);
                    console.log("error");
                });
        });
    };

    return (
        <AuthenticLayout>
            <hr />
            <div className="container text-editor">
                {/* <button onClick={notify}>Make me a toastfasdf</button> */}
                <div className="d-flex justify-content-between">
                    <p>Sender Email Address is: <b>adibrasel.2022@gmail.com</b></p>
                    <NavLink className="text-black" to="/EmailSetting">
                        <p>Email Setting <TbSettingsUp /></p>
                    </NavLink>
                </div>
                <div className="mb-2">
                    <div className="">
                        <label>To: @gmail.com এর পরে কমা দেওয়ার দরকার নেই। এখন পর্যন্ত মাল্টিফল ইমেল পাঠানো কাজ করবে</label>
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
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
        </AuthenticLayout>
    );
};

export default MultipleEmailSend;
