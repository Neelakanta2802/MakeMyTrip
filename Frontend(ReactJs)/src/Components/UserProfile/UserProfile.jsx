import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileData } from "../../Redux/Slices/Userprofile";

export default function UserProfile() {
  const [userImage, setUserImage] = useState("");
  const [data, setData] = useState([]); // local way lo data store chestunna but mana scenario lo useState localga vaddu
  const dispatch = useDispatch();

  const displayUsersData = useSelector(
    (globalState) => globalState.UserProfile.users,
  );

  console.log("displayUsersData", displayUsersData);
  async function displayUserImage() {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setUserImage(response.data);
      console.log(response.data, "response.data");
    } catch (error) {
      alert(error);
    }
  }

  async function getUsersData() {
    const token = localStorage.getItem("access_token");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );

      // setData(response.data); local ga data ni update chestunam
      dispatch(getUserProfileData(response.data)); // global way

      console.log(response.data, "response.data");
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    displayUserImage();
    getUsersData();
  }, []);

  return (
    <>
      <div>Check UserProfile based on Login Authetication key</div>

      <img src={userImage.avatar} />

      {displayUsersData.map((ele) => {
        return <>
        <span> {ele.name}</span>
        
       </>;
      })}
    </>
  );
}

// ikkada scenarion initial ga button click cheyanu? direct ga api call cheyali?
