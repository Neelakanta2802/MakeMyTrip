import React, { useState } from "react";
import axios from "axios";
export default function UserProfile() {
  const [userImage, setUserImage] = useState("");
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

  return (
    <>
      <div>Check UserProfile based on Login Authetication key</div>

      <button onClick={displayUserImage}>Display userImage</button>

      <img src={userImage.avatar} />
    </>
  );
}
