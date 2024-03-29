import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav';
import Footer from 'Common/Footer/Footer';
import TopBar from 'Common/Header/TopBar';
import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AuthenticCategoryNew: React.FC = () => {
    const [text, setText] = useState<string>("");

    console.log(text)

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




    const SendButton = () => {
        let URL = "http://localhost:5000/api/v1/MailSend"


        let PostBody: any = {
            to: "adibrasel.com@gmail.com, adibrasel.2024@gmail.com",
            subject: "Subject t",
            html: text,
        }
        axios.post(URL, PostBody).then((res) => {

            console.log(res)

        }).catch((Err) => {

            console.log(Err)


        });
    }




    return (
        <>


            <AuthenticLayout>

                <hr />
                <div className="container text-editor">

                    <div className="d-flex justify-content-between mb-2">
                        <div className="text-muted">
                            <h2>Create Category</h2>
                        </div>
                        <div className="text-muted mt-2">
                            <button className='btn btn-primary' style={{ width: "200px" }} onClick={SendButton}>Send</button>
                        </div>
                    </div>



                    <ReactQuill
                        theme="snow"
                        value={text}
                        onChange={setText}
                        modules={modules}
                        formats={formats}
                        className='AuthenticCategoryNewInput'
                    />
                </div>


            </AuthenticLayout>


        </>
    );
}

export default AuthenticCategoryNew;
