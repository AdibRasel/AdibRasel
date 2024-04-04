import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GiSave } from "react-icons/gi";

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


    // Base64 image start 
    const [Thumbnail, setThumbnail] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files && e.target.files[0];

        if (file) {
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setThumbnail(base64String);
            };

            reader.readAsDataURL(file);
        }
    };

    // Base64 image end






    return (
        <>


            <AuthenticLayout>

                <div className="container">

                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Create Category</h2>
                        </div>


                        <div className="col-md-6 ms-right" style={{ textAlign: "right" }}>
                            <button className='btn btn-primary' style={{ width: "200px" }} >Create <GiSave /></button>
                        </div>

                    </div>
                    <hr />



                    <div className="">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Category Title</span>
                            {/* <input type="text" className="form-control" placeholder="Category Title"  /> */}
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Category Thumbnail (image)</span>
                            <input accept="image/*" onChange={handleImageChange} type="file" className="form-control" placeholder="Category Thumbnail" />
                        </div>
                    </div>






                    <ReactQuill
                        theme="snow"
                        value={text}
                        onChange={setText}
                        modules={modules}
                        formats={formats}
                        className=''
                    />

                    <button className='btn btn-primary my-2' style={{ width: "100%" }} >Create <GiSave /></button>


                    <p className='my-2'>Thumbnail Preview</p>
                    {Thumbnail && <img src={Thumbnail} alt="Uploaded" className='img-fluid' />}

                </div>


            </AuthenticLayout>


        </>
    );
}

export default AuthenticCategoryNew;
