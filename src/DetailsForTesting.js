// import React from "react";
// import { useNavigate } from "react-router-dom";

// function HomeForTesting(userDetails) {
// 	const userId = userDetails.userId;
// 	// const userGoogleId = userDetails.userGoogleId;
// 	// const userName = userDetails.userName;
// 		// console.log(user);
//     const navigate = useNavigate();
// 	const submitDetails = () => {
// 		navigate("/ask-doubts-test");
// 	};
// 	return (
// 		<div>

// 					{/* <img
// 						src={user.picture}
// 						alt="profile"
// 					/> */}

//                     <p>{userId}</p>
// 					<p>{userGoogleId}</p>
// 					<p>{userName}</p>
//                     {/* <p>{userDetails.user.googleId}</p> */}


// 					<button onClick={submitDetails}>
// 						Submit
// 					</button>

// 		</div>
// 	);
// }

// export default HomeForTesting;

import React from "react";
import { useNavigate } from "react-router-dom";

const DetailsForTesting = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/ask-doubts-test");
    }
    return (
        <div>
            <h1>Details Page</h1>
            <button onClick={handleClick}>Submit Details</button>
        </div>
    )
}

export default DetailsForTesting;