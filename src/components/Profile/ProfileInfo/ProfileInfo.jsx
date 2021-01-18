import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://im0-tub-by.yandex.net/i?id=a14ee9c970ea74db6a864566fabc5ee1&n=13&exp=1" />
      </div>
      <div className={s.descriptionBlock}>ava + description </div>
    </div>
  );
};

export default ProfileInfo;
