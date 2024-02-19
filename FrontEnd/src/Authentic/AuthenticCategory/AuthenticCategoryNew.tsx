import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav';
import Footer from 'Common/Footer/Footer';
import TopBar from 'Common/Header/TopBar';
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

    return (
        <>
            <TopBar />
            <AuthenticNav />
            <hr />
            <div className="container text-editor">

                <div className="d-flex justify-content-between mb-2">
                    <div className="text-muted">
                        <h2>Create Category</h2>
                    </div>
                    <div className="text-muted mt-2">
                        <button className='btn btn-primary' style={{width:"200px"}}>Save</button>
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
            <Footer />
        </>
    );
}

export default AuthenticCategoryNew;
