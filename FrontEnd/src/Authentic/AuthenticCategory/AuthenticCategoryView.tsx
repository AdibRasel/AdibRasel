import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import React from 'react'
import { NavLink } from 'react-router-dom';
import PostList from './AuthenticPost/AuthenticPostList';

import Germany from "../../Public/Components/Carousel/GermanyLanguage.jpg"



const AuthenticCategoryView = () => {



    return (<>




        <AuthenticLayout>

            <hr />




            <div className="CategoryContent">
                <div className="row">

                    <div className="col-md-9">
                        <NavLink to="/AuthenticCreatePost">
                            <button className='btn btn-dark my-2' style={{ width: "100%" }}>Create Post</button>
                        </NavLink>

                        <PostList />
                    </div>

                    <div className="col-md-3">
                        <h2 className='CommonBG p-2 text-white rounded'>Category info</h2>

                        <h3>This is C++ Category</h3>

                        <img src={Germany} className='img-fluid' alt="" />

                        <NavLink to="/AuthenticCreatePost">
                            <button className='btn btn-dark my-2' style={{ width: "100%" }}>Create Post</button>
                        </NavLink>


                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quaerat accusantium quae, quia deserunt fuga nulla hic praesentium debitis expedita atque, deleniti quos veniam distinctio est. Dolore, consectetur? Fuga vero nemo libero, necessitatibus ut nisi! Quaerat amet quidem, tenetur quos vero veniam tempora? Illum recusandae vero, repellendus laborum assumenda voluptatem dolorum numquam nostrum dignissimos itaque doloribus nemo perspiciatis quod sint. Obcaecati quaerat modi quas distinctio debitis et esse doloribus doloremque itaque earum quisquam facere porro hic laudantium excepturi eos neque blanditiis commodi dignissimos laborum enim, voluptates placeat. Voluptatem quos minus expedita ab consectetur tenetur atque mollitia alias vitae, nostrum soluta laudantium recusandae quasi vel possimus? Quas amet autem modi temporibus quaerat cupiditate omnis dicta, earum ipsum tempore, beatae error reiciendis eum sapiente explicabo rerum ratione! Dolore praesentium similique provident, nostrum quasi, fugit hic ipsam id sed, neque tempore! Soluta aspernatur reprehenderit eum consequatur asperiores dolor minima vel quidem voluptatibus quod dicta velit quae animi voluptatem porro nobis error molestiae assumenda maxime maiores ab non, a quam. Amet odit totam numquam reiciendis laboriosam asperiores recusandae adipisci, molestias praesentium ratione ducimus cumque magni quia voluptas a dignissimos tempora blanditiis illo? Ipsa consectetur esse reiciendis nihil labore blanditiis incidunt voluptatibus, molestias nemo totam?
                        </p>



                    </div>

                </div>
            </div>





        </AuthenticLayout>






    </>)
}

export default AuthenticCategoryView