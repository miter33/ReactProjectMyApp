import React from "react";
import s from "./../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://im0-tub-by.yandex.net/i?id=a14ee9c970ea74db6a864566fabc5ee1&n=13&exp=1" />
      </div>
      <div>ava + description </div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
