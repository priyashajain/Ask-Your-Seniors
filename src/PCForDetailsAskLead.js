import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const PCForDetailsAskLead = ()=> {
    const [user, setUser] = useState(null);

    const [userId, setUserId] = useState("");
    const [userGoogleId, setUserGoogleId] = useState("");
    const [userBranch, setUserBranch] = useState("");
    const [userIsAdmin, setUserIsAdmin] = useState(false);

    const getUser = async () => {
      
        const url = `http://localhost:5000/auth/login/success`;
        const { data } = await axios.get(url, { withCredentials: true });

        // data = await data.json(); 

        console.log(data);
        // console.log(data.user);

        // setUser(data);
        setUser(data.user._json);
        
        setUserId(data.user._id);
        setUserGoogleId(data.user.googleId);
        setUserIsAdmin(data.user.isAdmin);
        setUserBranch(data.user.branch);
        // setUserName("Priyasha Jain");

        // setUser(data.user);

        // console.log(userName);
  
    };

    useEffect(() => {
        getUser();
        // console.log(user);
        // console.log(userName);
    });

    return (
        // userId ? userIsAdmin ? <Navigate to="/admin" /> : <Outlet /> : <Navigate to="/" />
        // userIsAdmin ? <Navigate to="/admin" /> : <Outlet /> 
        userId ? <Outlet /> : <Navigate to="/" /> 
    );
}

export default PCForDetailsAskLead;