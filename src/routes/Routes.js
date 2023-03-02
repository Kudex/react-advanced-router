import React, { useEffect } from "react";
import {
  Route,
  Routes as ReactRouterRoutes,
  useLocation,
} from "react-router-dom";

import Nav from "../components/Nav";
import NoPages from "../pages/NoPages";

import HomePage from "../pages/home/Home.page";
import SettingsPage from "../pages/settings/Settings.page";
import ProfilePage from "../pages/profile/Profile.page";
import UserSingle from "../pages/user-single/UserSingle";

const MyOwnPage = ()=>{
  return(
<div>
  <h1>It's my page</h1>
</div>
  );
}

// export const appRoutes = [
//   {
//     id:1,
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     id:2,
//     path: "/settings",
//     element: <SettingsPage />,
//   },
//   {
//     id:3,
//     path: "/profile",
//     element: <ProfilePage />,
//   },
// ];

export const appRoutes = {
  home: {
    id: 1,
    path: "/",
    element: <HomePage />,
  },
  settings: {
    id: 2,
    path: "/settings",
    element: <SettingsPage />,
  },
  profile: {
    id: 3,
    path: "/profile",
    element: <ProfilePage />,
  },
};

const Routes = () => {
  const location = useLocation();
  useEffect(() => {
    console.log("Path is changed", location.pathname);
    if (location.pathname === appRoutes.settings.path) {
      console.log("settings is run");
    } else if (location.pathname === appRoutes.profile.path) {
      console.log("profile is run");
    } else {
      console.log("home is run");
    }
  }, [location.pathname]);

  return (
    <div>
      <Nav />
      <ReactRouterRoutes>
        {Object.values(appRoutes).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
        <Route path="*" element={<NoPages/>}/>
        <Route path="/user">
            <Route path="me" element={<MyOwnPage/>}/>
            <Route path=":userId" element={<UserSingle/>}/>

        </Route>
      </ReactRouterRoutes>
    </div>
  );
};

export default Routes;
