import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GiSave } from "react-icons/gi";
import { PostFullDetails, PostUpdateService } from 'ApiService/PostService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';


const AuthenticUpdatePost = () => {

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

    const { PostID, CategoryTitle } = useParams();

    const [OldData, setOldData] = useState<any[]>([]);

    const [OldTitle, SetOldTitle] = useState("");
    const [OldThumbnail, SetOldThumbnail] = useState("");
    const [PostIDs, SetPostIDs] = useState("");
    const [Category, SetCategoryID] = useState("");

    useEffect(() => {
        SetLoading(true)
        const PostBody = {
            ID: PostID
        };

        const fetchData = async () => {
            try {
                const response: any = await PostFullDetails(PostBody);
                setOldData(response.PostInfo.data.data);

                console.log(response)

                SetPostDetails(response.PostInfo.data.data[0].PostDetails)
                SetOldTitle(response.PostInfo.data.data[0].PostTitle)
                SetOldThumbnail(response.PostInfo.data.data[0].PostThumbnail)
                SetCategoryID(response.PostInfo.data.data[0].CategoryID)
                SetPostIDs(response.PostInfo.data.data[0]._id)

                SetLoading(false)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
            SetLoading(false)
            // SetLoading(true)
        };
        fetchData();

    }, []);




    const UpdateBtn = async () => {
        if (PostTitleRef.current) {
            const PostTitle = PostTitleRef.current.value;

            if (PostTitle.length <= 4) {
                SetPostTitleError("Write Post Title With 5 Characters");
            } else {
                SetPostTitleError("")


                // Construct the postBody object
                const postBody = {
                    PostTitle: PostTitle,
                    PostDetails: PostDetails,
                    PostThumbnail: Thumbnail,
                    CategoryTitle: CategoryTitle,
                    Status: "Active"
                };



                SetLoading(true)
                try {
                    const registrationAPICall = await PostUpdateService(postBody, PostIDs);

                    const RegistrationSucess = registrationAPICall?.status;

                    if (RegistrationSucess === "Update Success") {
                        Swal.fire({
                            title: "Good job",
                            text: "Post Create Success",
                            icon: "success"
                        });
                        navigate('/AuthenticCategoryView/' + Category);
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
                            <h2>{CategoryTitle + " > " + OldTitle + " > "} <b>Update Post</b></h2>

                            {Loading === true && (
                                <div className="spinner-border text-black text-center" style={{ textAlign: "center", margin: "auto" }} role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )}
                        </div>


                        <div className="col-md-6 ms-right" style={{ textAlign: "right" }}>
                            <button onClick={UpdateBtn} className='btn btn-primary' style={{ width: "200px" }} >Update <GiSave /></button>
                        </div>

                    </div>
                    <hr />



                    <div className="">
                        <div className="text-danger">{PostTitleError}</div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Post Title</span>
                            <textarea defaultValue={OldTitle} ref={PostTitleRef} onChange={OnChangeValidation} className="form-control" aria-label="With textarea"></textarea>
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


                    <button onClick={UpdateBtn} className='btn btn-primary my-2' style={{ width: "100%" }} >Update <GiSave /></button>


                    <p className='my-2'>Thumbnail Preview</p>
                    {Thumbnail ? (
                        <img src={Thumbnail} alt="Uploaded" className='img-fluid' />
                    ) : (
                        <img src={OldThumbnail} alt="Uploaded" className='img-fluid' />
                    )}
                </div>


            </AuthenticLayout>


        </>
    );
}

export default AuthenticUpdatePost;
