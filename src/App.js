/* eslint-disable */
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateComponent from './components/PrivateComponent';
// import PrivateComponentForAdmin from './components/PrivateComponentForAdmin';
// import Home from "./components/Home";
// import HomeCorrect from './components/HomeCorrect';
// import Details from "./components/Details";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
// import AskYourDoubts from "./components/AskYourDoubts";
// import Leaderboard from "./components/Leaderboard";
// import Admin from './components/Admin';
// import PrivateComponentForOthers from './components/PrivateComponentForOthers';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//       <BrowserRouter>
//         {/* <Nav /> */}
//         <Routes>


//         <Route element={<PrivateComponentForOthers />}>
//           <Route path="/" element={<HomeCorrect />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signin" element={<SignIn />} />
//         </Route>

//           <Route element={<PrivateComponent />}>
//             <Route path="/details/:id" element={<Details />} />
//             <Route path="/ask-your-doubts" element={<AskYourDoubts />} />
//             <Route path="/leaderboard" element={<Leaderboard />} />
//           </Route>



//           <Route element={<PrivateComponentForAdmin />}>
//             <Route path="/admin" element={<Admin />} />
//           </Route>

//         </Routes>
//       </BrowserRouter>
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;






// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// // import Home from "./pages/Home";
// // import Login from "./pages/Login";
// // import Signup from "./pages/Signup";
// import HomeForTesting from "./HomeForTesting";
// import LoginForTesting from "./LoginForTesting";
// import SignUpForTesting from "./SignUpForTesting";
// import "./App.css";
// import DetailsForTesting from "./DetailsForTesting";

// function App() {
// 	const [user, setUser] = useState(null);
// 	const [userId, setUserId] = useState("");
// 	const [userGoogleId, setUserGoogleId] = useState("");
// 	const [userName, setUserName] = useState("");
// 	const [userIsAdmin, setUserIsAdmin] = useState(false);

// 	const getUser = async () => {
// 		// try {
// 		const url = `http://localhost:5000/auth/login/success`;
// 		const { data } = await axios.get(url, { withCredentials: true });

// 		// data = await data.json(); 

// 		console.log(data);
// 		// console.log(data.user);

// 		// setUser(data);
// 		setUser(data.user._json);
// 		setUserId(data.user._id);
// 		setUserGoogleId(data.user.googleId);
// 		setUserIsAdmin(data.user.isAdmin);
// 		// setUserName("Priyasha Jain");

// 		// setUser(data.user);

// 		// console.log(userName);
// 		// }

// 		// catch (err) {
// 		// 	console.log(err);
// 		// }
// 	};

// 	useEffect(() => {
// 		getUser();
// 		// console.log(user);
// 		// console.log(userName);
// 	});

// 	return (
// 		<BrowserRouter>
// 			<div>
// 				<Routes>

// 					<Route
// 						exact
// 						path="/"
// 						element={userId ? <HomeForTesting userId={userId} userGoogleId={userGoogleId} userName={userName}/> : <Navigate to="/login" />}
// 					/>
// 					<Route
// 						exact
// 						path="/login"
// 						element={userId ? <Navigate to="/" /> : <LoginForTesting />}
// 					/>
// 					<Route
// 						path="/signup"
// 						element={userId? <Navigate to="/" /> : <SignUpForTesting />}
// 					/>
// 					<Route
// 						exact
// 						path="/details"
// 						element={<DetailsForTesting />}
// 					/>
// 					<Route
// 						path={`/ask-doubts-test`}
// 						element={<h1>Ask Doubts Page</h1>}
// 					/>
// 					<Route
// 						path={`/admin`}
// 						element={userIsAdmin? <h1>Admin Page</h1> : <Navigate to="/" />}
// 					/>








// 					<Route
// 						exact
// 						path="/"
// 						element={userId ? <Navigate to="/home" /> : <h1>Home Page for Logged Out</h1>}
// 					/>

// 					<Route
// 						exact
// 						path="/home"
// 						element={userId ? userIsAdmin?<Navigate to="" />:<HomeForTesting userId={userId} userGoogleId={userGoogleId} userName={userName} /> : <Navigate to="/" />}
// 					/>
// 					<Route
// 						exact
// 						path="/login"
// 						element={userId ? <Navigate to="/home" /> : <LoginForTesting />}
// 					/>
// 					<Route
// 						path="/signup"
// 						element={userId ? <Navigate to="/home" /> : <SignUpForTesting />}
// 					/>
// 					<Route
// 						exact
// 						path="/details"
// 						element={   <DetailsForTesting /> }
// 					/>
// 					<Route
// 						path={`/ask-doubts-test`}
// 						element={  <h1>Ask Doubts Page</h1>}
// 					/>
// 					<Route
// 						path={`/admin`}
// 						element={userIsAdmin? <h1>Admin Page</h1> : <Navigate to="/home" />}
// 					/>



// 				</Routes>
// 			</div>
// 		</BrowserRouter>
// 	);
// }

// export default App;









import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import HomeCorrect from './components/HomeCorrect';
import Details from "./components/Details";
import AskYourDoubts from "./components/AskYourDoubts";
import Leaderboard from "./components/Leaderboard";
import Admin from './components/Admin';
import HomeCorrectForLoggedIn from "./components/HomeCorrectForLoggedIn";

import HomeForTesting from "./HomeForTesting";
import LoginForTesting from "./LoginForTesting";
import SignUpForTesting from "./SignUpForTesting";

import "./App.css";

import DetailsForTesting from "./DetailsForTesting";
import PCForAdminTesting from "./PCForAdminTesting";
import PCForDetailsAskLead from "./PCForDetailsAskLead";
import PCForLoginSignupHomeOut from "./PCForLoginSignupHomeOut";
import PCForHomeLoggedIn from "./PCForHomeLoggedIn";

function App() {
	const [user, setUser] = useState(null);
	const [userId, setUserId] = useState("");
	const [userGoogleId, setUserGoogleId] = useState("");
	// const [userName, setUserName] = useState("");
	const [userIsAdmin, setUserIsAdmin] = useState(false);
	const [userEmail, setUserEmail] = useState("");
	const [userfName, setUserfName] = useState("");
	const [userlName, setUserlName] = useState("");
	const [userBranch, setUserBranch] = useState("");
	const [userYear, setUserYear] = useState("");

	const [userAvatar, setUserAvatar] = useState("");
	const [navbarName, setNavbarName] = useState("");


	// let [users, setUsers] = useState([]);
	// const [winnerfName, setWinnerfName] = useState("");
	// const [winnerlName, setWinnerlName] = useState("");
	// const [winnerBranch, setWinnerBranch] = useState("");
	// const [winnerYear, setWinnerYear] = useState("");
	// const [winnerNoOfDoubtsAsked, setWinnerNoOfDoubtsAsked] = useState("");
	// const [winneroOfDoubtsAnswered, setWinnerNoOfDoubtsAnswered] = useState("");

	const getUser = async () => {
		try {
			// const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const url = `https://ask-your-seniors-backend.vercel.app/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });

			// data = await data.json(); 

			console.log(data);
			// console.log(data.user);

			// setUser(data);
			setUser(data.user._json);
			setUserId(data.user._id);
			setUserGoogleId(data.user.googleId);
			setUserIsAdmin(data.user.isAdmin);
			setUserEmail(data.user.email);
			setUserfName(data.user.fName);
			setUserlName(data.user.lName);
			setUserBranch(data.user.branch);
			setUserYear(data.user.year);

			setUserAvatar(data.user.avatar);
			setNavbarName(`${data.user.fName} ${data.user.lName}`);
			// setUserName("Priyasha Jain");

			// setUser(data.user);

			console.log(userIsAdmin);
		}

		catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
		// console.log(user);
		// console.log(userName);
		// console.log(userIsAdmin)
		// getUsers();
	});



	// const getUsers = async () => {

	// 	let resultUsers = await fetch("https://ask-your-seniors-backend.vercel.app/users");
	// 	resultUsers = await resultUsers.json();
	// 	setUsers(resultUsers);

	// 	setUsers(resultUsers.sort(
	// 		(p1, p2) => {
	// 			let sum1 = p1.noOfDoubtsAsked + p1.noOfDoubtsAnswered;
	// 			let sum2 = p2.noOfDoubtsAsked + p2.noOfDoubtsAnswered;

	// 			if (sum1 > sum2) {
	// 				return -1;
	// 			}
	// 			if (sum1 < sum2) {
	// 				return 1;
	// 			}

	// 			return 0;
	// 		}).filter(lUser => lUser.isAdmin === false));

	// 	setWinner(users.find((obj, index) => {
	// 		return index === 0;
	// 	}));

	// 	setWinnerfName(winner.fName);
	// 	setWinnerlName(winner.lName);
	// 	setWinnerBranch(winner.branch);
	// 	setWinnerYear(winner.year);
	// 	setWinnerNoOfDoubtsAsked(winner.noOfDoubtsAsked);
	// 	setWinnerNoOfDoubtsAnswered(winner.noOfDoubtsAnswered);
	// 	//   console.log(winner.fName);
	// }



	return (
		<BrowserRouter>
			<div>
				<Routes>

					{/* <Route element={<PCForHomeLoggedIn />}> */}
					<Route
						exact
						path="/home"
						element={<HomeForTesting userId={userId} userGoogleId={userGoogleId} userEmailSent={userEmail} userfNameSent={userfName} userlNameSent={userlName} userBranchSent={userBranch} userYearSent={userYear} />}
					/>
					{/* </Route> */}


					{/* <Route element={<PCForLoginSignupHomeOut />}> */}
					<Route
						exact
						path="/"
						// element={<HomeCorrect />}
						element={userId!=="" ?  <HomeCorrectForLoggedIn navbarName={navbarName} userAvatarSent={userAvatar}/> : <HomeCorrect /> }
					/>
					<Route
						exact
						path="/signin"
						element={<LoginForTesting />}
					/>
					<Route
						path="/signup"
						element={<SignUpForTesting />}
					/>
					{/* </Route> */}


					{/* <Route element={<PCForDetailsAskLead />}> */}
					<Route
						exact
						path={`/details/:id`}
						element={<Details />}
					/>
					{/* <Route
						path={`/details`}
						element={<Details />}
					/> */}
					<Route
						path={`/ask-your-doubts`}
						element={<AskYourDoubts userId={userId} userGoogleId={userGoogleId} userEmailSent={userEmail} userfNameSent={userfName} userlNameSent={userlName} userBranchSent={userBranch} userYearSent={userYear} />}
					/>
					<Route
						path={`/leaderboard`}
						element={<Leaderboard  userId={userId} userGoogleId={userGoogleId} />}
						// element={<Leaderboard userId={userId} userGoogleId={userGoogleId} winnerfNameSent={winnerfName} winnerlNameSent={winnerlName} winnerBranchSent={winnerBranch} winnerYearSent={winnerYear} winnerNoOfDoubtsAskedSent={winnerNoOfDoubtsAsked} winneroOfDoubtsAnsweredSent={winneroOfDoubtsAnswered} />}
					/>
					{/* </Route> */}


					{/* <Route element={<PCForAdminTesting userIsAdmin={userIsAdmin}/>}> */}
					<Route
						path={`/admin`}
						element={<Admin />}
					/>
					{/* </Route> */}






					{/* <Route
						exact
						path="/"
						element={userId ? <Navigate to="/home" /> : <h1>Home Page for Logged Out</h1>}
					/>
					
					<Route
						exact
						path="/home"
						element={userId ? userIsAdmin?<Navigate to="" />:<HomeForTesting userId={userId} userGoogleId={userGoogleId} userName={userName} /> : <Navigate to="/" />}
					/>
					<Route
						exact
						path="/login"
						element={userId ? <Navigate to="/home" /> : <LoginForTesting />}
					/>
					<Route
						path="/signup"
						element={userId ? <Navigate to="/home" /> : <SignUpForTesting />}
					/>
					<Route
						exact
						path="/details"
						element={   <DetailsForTesting /> }
					/>
					<Route
						path={`/ask-doubts-test`}
						element={  <h1>Ask Doubts Page</h1>}
					/>
					<Route
						path={`/admin`}
						element={userIsAdmin? <h1>Admin Page</h1> : <Navigate to="/home" />}
					/> */}



				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
