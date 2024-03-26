import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import React, { useEffect, useRef, useState } from 'react'

const EmailSetting = () => {



    const EmailRef = useRef<HTMLInputElement>(null);
    const PasswordRef = useRef<HTMLInputElement>(null);
    const CategoryRef = useRef<HTMLInputElement>(null);


    const [CurrentEmail, SetCurreentEmail] = useState("")
    const [CurrentCategory, SetCurreentCategory] = useState("")


    useEffect(() => {

        const storedData: any = localStorage.getItem('SendFromEmail');
        SetCurreentEmail(storedData)

    }, []);


    const CurrentEmailUpdate = ()=>{
        const storedData:any = localStorage.getItem('SendFromEmail');
        SetCurreentEmail(storedData)
    }
    const CurrentCategoryUpdate = ()=>{
        const storedData:any = localStorage.getItem('EmailCategory');
        SetCurreentCategory(storedData)
    }


    const UpdateEmailBtn = () => {

        const Email = EmailRef.current?.value || "";
        const Password = PasswordRef.current?.value || "";
        const Category = CategoryRef.current?.value || "";

        localStorage.setItem('SendFromEmail', Email);
        localStorage.setItem('NotCoding', Password);

        localStorage.setItem('EmailCategory', Category);


        CurrentEmailUpdate()
        CurrentCategoryUpdate()


    }









    return (<><AuthenticLayout>







        <div className="card my-5">
            <div className="card-header">
                Email Setting
            </div>
            <div className="card-body">
                <h5 className="card-title">Current Email: <b>{CurrentEmail}</b> || Current Category: <b>{CurrentCategory}</b></h5>


                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input ref={EmailRef} type="email" className="form-control" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input ref={PasswordRef} type="password" className="form-control" />
                    </div>
                </div>
                <hr />
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Category</label>
                    <div className="col-sm-10">
                        <input ref={CategoryRef} type="text" className="form-control" />
                    </div>
                </div>

                <button className="btn btn-primary" onClick={UpdateEmailBtn}>Update Email</button>
            </div>
        </div>







    </AuthenticLayout></>)
}

export default EmailSetting