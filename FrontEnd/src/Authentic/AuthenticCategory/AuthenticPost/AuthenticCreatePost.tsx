import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import React, { useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GiSave } from "react-icons/gi";
import { PostCreateService } from 'ApiService/PostService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';

// import AuthenticPost from './AuthenticPost';


const AuthenticCreatePost = () => {

    const { CategoryName } = useParams();

    console.log(CategoryName)

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

    const [PostDetails, SetPostDetails] = useState<string>("");


    const PostTitleRef = useRef<HTMLTextAreaElement>(null);

    const [PostTitleError, SetPostTitleError] = useState("");

    const CreateBtn = async () => {
        if (PostTitleRef.current) {
            const PostTitle = PostTitleRef.current.value;

            if (PostTitle.length <= 4) {
                SetPostTitleError("Write Post Title With 5 Characters");
            } else {
                SetPostTitleError("")

                // PostCreateService()

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
                    PostTitle: PostTitle,
                    PostDetails: PostDetails,
                    PostThumbnail: Thumbnail,
                    Status: "Active"
                };



                SetLoading(true)
                try {
                    const registrationAPICall = await PostCreateService(postBody);

                    const RegistrationSucess = registrationAPICall?.status;

                    if (RegistrationSucess === "Post Create Success") {
                        Swal.fire({
                            title: "Good job",
                            text: "Post Create Success",
                            icon: "success"
                        });
                        navigate('/AuthenticPost');
                        SetLoading(false)
                        const dataToSend = 'Hello from Parent';
                        // <AuthenticPost data={dataToSend}  />
                    }


                } catch (error) {
                    console.log("Registration failed:", error);
                }



            }
        }

    }





    const OnChangeValidation: any = () => {
        if (PostTitleRef.current) {
            const PostTitle = PostTitleRef.current.value;

            if (PostTitle.length <= 4) {
                SetPostTitleError("Write Post Title With 5 Characters");
            } else {
                SetPostTitleError("")
            }
        }
    };






    return (
        <>


            <AuthenticLayout>


                {/* {<AuthenticPost data={"registrationSuccess"} />} */}

                <div className="container">

                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{CategoryName + " > "} Create Post</h2>

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
                        <div className="text-danger">{PostTitleError}</div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Post Title</span>
                            <textarea ref={PostTitleRef} onChange={OnChangeValidation} className="form-control" aria-label="With textarea"></textarea>
                            <br />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Post Thumbnail (image)</span>
                            <input accept="image/*" onChange={handleImageChange} type="file" className="form-control" placeholder="Post Thumbnail" />
                        </div>
                    </div>





                    <p>Post Details </p>
                    <ReactQuill
                        theme="snow"
                        value={PostDetails}
                        onChange={SetPostDetails}
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

export default AuthenticCreatePost;
