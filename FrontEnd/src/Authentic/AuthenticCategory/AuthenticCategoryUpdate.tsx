import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout';
import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { GiSave } from "react-icons/gi";
import { CategoryFullDetails, CategoryUpdateService } from 'ApiService/CategoryService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';


const AuthenticCategoryUpdate = () => {

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

    const { id } = useParams();

    const [OldData, setOldData] = useState<any[]>([]);

    const [OldTitle, SetOldTitle] = useState("");
    const [OldThumbnail, SetOldThumbnail] = useState("");
    const [CategoryID, SetCategoryID] = useState("");

    useEffect(() => {
        SetLoading(true)
        const PostBody = {
            ID: id
        };

        const fetchData = async () => {
            try {
                const response: any = await CategoryFullDetails(PostBody);
                setOldData(response.CategoryInfo.data.data);

                console.log(response)

                SetCategoryDetails(response.CategoryInfo.data.data[0].CategoryDetails)
                SetOldTitle(response.CategoryInfo.data.data[0].CategoryTitle)
                SetOldThumbnail(response.CategoryInfo.data.data[0].CategoryThumbnail)
                SetCategoryID(response.CategoryInfo.data.data[0]._id)

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
        if (CategoryTitleRef.current) {
            const CategoryTitle = CategoryTitleRef.current.value;

            if (CategoryTitle.length <= 4) {
                SetCategoryTitleError("Write Category Title With 5 Characters");
            } else {
                SetCategoryTitleError("")


                // Construct the postBody object
                const postBody = {
                    CategoryTitle: CategoryTitle,
                    CategoryDetails: CategoryDetails,
                    CategoryThumbnail: Thumbnail,
                    Status: "Active"
                };



                SetLoading(true)
                try {
                    const registrationAPICall = await CategoryUpdateService(postBody, CategoryID);

                    const RegistrationSucess = registrationAPICall?.status;

                    if (RegistrationSucess === "Update Success") {
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
                            <h2>Update Category</h2>

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
                        <div className="text-danger">{CategoryTitleError}</div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Category Title</span>
                            <textarea defaultValue={OldTitle} ref={CategoryTitleRef} onChange={OnChangeValidation} className="form-control" aria-label="With textarea"></textarea>
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

export default AuthenticCategoryUpdate;
