import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GiSave } from "react-icons/gi";
import { CategoryCreateService } from 'ApiService/CategoryService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import AuthenticCategory from './AuthenticCategory';


const AuthenticCategoryNew = () => {

    const navigate = useNavigate();


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


    const [Loading, SetLoading] = useState(false);

    const [CategoryDetails, SetCategoryDetails] = useState<string>("");


    const CategoryTitleRef = useRef<HTMLTextAreaElement>(null);

    const [CategoryTitleError, SetCategoryTitleError] = useState("");

    const CreateBtn = async () => {
        if (CategoryTitleRef.current) {
            const CategoryTitle = CategoryTitleRef.current.value;

            if (CategoryTitle.length <= 4) {
                SetCategoryTitleError("Write Category Title With 5 Characters");
            } else {
                SetCategoryTitleError("")

                // CategoryCreateService()

                // Get items from localStorage
                const UserName: string | null = localStorage.getItem("FullName");
                const UserID: string | null = localStorage.getItem("UserID");
                const UserMobile: string | null = localStorage.getItem("Mobile");
                const UserEmail: string | null = localStorage.getItem("Email");

                // Construct the postBody object
                const postBody = {
                    UserName: UserName,
                    UserID: UserID,
                    UserMobile: UserMobile,
                    UserEmail: UserEmail,
                    CategoryTitle: CategoryTitle,
                    CategoryDetails: CategoryDetails,
                    CategoryThumbnail: Thumbnail,
                    Status: "Active"
                };



                SetLoading(true)
                try {
                    const registrationAPICall = await CategoryCreateService(postBody);

                    const RegistrationSucess = registrationAPICall?.status;

                    if (RegistrationSucess === "Category Create Success") {
                        Swal.fire({
                            title: "Good job",
                            text: "Category Create Success",
                            icon: "success"
                        });
                        navigate('/AuthenticCategory');
                        SetLoading(false)
                        const dataToSend = 'Hello from Parent';
                        // <AuthenticCategory data={dataToSend}  />
                    }


                } catch (error) {
                    console.log("Registration failed:", error);
                }



            }
        }

    }





    const OnChangeValidation: any = () => {
        if (CategoryTitleRef.current) {
            const CategoryTitle = CategoryTitleRef.current.value;

            if (CategoryTitle.length <= 4) {
                SetCategoryTitleError("Write Category Title With 5 Characters");
            } else {
                SetCategoryTitleError("")
            }
        }
    };






    return (
        <>


            <AuthenticLayout>


                {/* {<AuthenticCategory data={"registrationSuccess"} />} */}

                <div className="container">

                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Create Category</h2>

                            {Loading === true && (
                                <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )}
                        </div>


                        <div className="col-md-6 ms-right" style={{ textAlign: "right" }}>
                            <button onClick={CreateBtn} className='btn btn-primary' style={{ width: "200px" }} >Create <GiSave /></button>
                        </div>

                    </div>
                    <hr />



                    <div className="">
                        <div className="text-danger">{CategoryTitleError}</div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Category Title</span>
                            <textarea ref={CategoryTitleRef} onChange={OnChangeValidation} className="form-control" aria-label="With textarea"></textarea>
                            <br />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Category Thumbnail (image)</span>
                            <input accept="image/*" onChange={handleImageChange} type="file" className="form-control" placeholder="Category Thumbnail" />
                        </div>
                    </div>





                    <p>Category Details </p>
                    <ReactQuill
                        theme="snow"
                        value={CategoryDetails}
                        onChange={SetCategoryDetails}
                        modules={modules}
                        formats={formats}
                        className=''
                    />

                    {Loading === true && (
                        <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}


                    <button onClick={CreateBtn} className='btn btn-primary my-2' style={{ width: "100%" }} >Create <GiSave /></button>


                    <p className='my-2'>Thumbnail Preview</p>
                    {Thumbnail && <img src={Thumbnail} alt="Uploaded" className='img-fluid' />}

                </div>


            </AuthenticLayout>


        </>
    );
}

export default AuthenticCategoryNew;
