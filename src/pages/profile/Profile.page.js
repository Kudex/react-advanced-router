import React from "react";
import styles from "./profile.module.css";
import { useLocation} from "react-router-dom";
const ProfilePage = () => {
  const location = useLocation();


  return (
    <div className={styles["container"]}>
      hello from Profile page data from state: {location.state.value}
    </div>
  );
};

export default ProfilePage;
