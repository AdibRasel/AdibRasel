import AuthenticLayout from 'Authentic/AuthenticLayout/AuthenticLayout'
import AuthenticNav from 'Authentic/Components/AuthenticNav/AuthenticNav'
import TopBar from 'Common/Header/TopBar'
import React from 'react'
import Email from "./Email.json"

const AuthenticComment: React.FC = () => {
  return (
    <>
      <AuthenticLayout>
        <hr />
        {/* Mapping over the Email data */}
        {Email.map(review => (
          <div key={review.props.review.id} className="review-item">
            {/* <p>Username: {review.props.review.username}@gmail.com</p> */}
            <p>{review.props.review.username}@gmail.com</p>
            {/* <p>Comment: {review.props.review.comment}</p>
            <p>Country: {review.props.review.reviewer_country}</p> */}
            {/* You can add more data points here */}
            {/* <p>length{Email.length }</p> */}
          </div>
        ))}
        <h1>AuthenticComment</h1>
      </AuthenticLayout>
    </>
  );
}

export default AuthenticComment;


// Email password below 
// ezbj bzbw ycos gfil
