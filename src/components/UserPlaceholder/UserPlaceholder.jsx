import React, { useEffect } from 'react'
import { useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from "axios";
import { baseURL } from '../../config';
const UserPlaceholder = ({ setUserData, userData }) => {
    const { id } = useParams();
    const location = useLocation().pathname;
 console.log(location)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userProfile = await axios.get(`${baseURL}/users/find/${id}`);
                setUserData(userProfile.data);
            } catch (err) {
                console.log("err");
            }
        };
        fetchData();
    }, [id]);


    return (
  <div>

    <h2 class=" text-xl "> <ArrowBackIcon/> {userData?.username}</h2>
    <p class=" mb-2 text-gray-600 dark:text-gray-300">{userData?.email}</p>
  </div>
    )
}

export default UserPlaceholder