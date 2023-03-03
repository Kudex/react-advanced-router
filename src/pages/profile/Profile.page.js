import React from "react";
import styles from "./profile.module.css";
import { useLocation, useParams } from "react-router-dom";
const ProfilePage = () => {
  const location = useLocation();
  const params = useParams();

  return (
    <div className={styles["container"]}>
      hello from Profile page data from state: {location.state.value}
    </div>
  );
};

export default ProfilePage;
