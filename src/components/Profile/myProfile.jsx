import React from "react";
import {useNavigate} from "react-router";
import { NavLink, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import styles from "./Profile.module.css";

function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLink
      className={match ? styles.nav__link_active : styles.nav__link}
      to={to}
      {...props}
    >
      { children }
    </NavLink>
  )
}


const MyProfile=({ isAuth, user })=>{

    const navigate = useNavigate();

    console.log(isAuth)

    React.useEffect(() => {
        if (!isAuth) {
            navigate('/');
        }
    },[]);


    return(
        <main className={styles.container}>
          <div className={styles.nav}>
            <div className={styles.user__info}>
              <img className={styles.user__avatar} src="/assetc/user.png" alt=""/>
              <div className={styles.user__name}>{ user.name }</div>
              <div className={styles.user__email}>{ user.email }</div>
            </div>
            <CustomLink to="/profile">
              Личная информация
            </CustomLink>
            <CustomLink to="/profile/mycosts">
              Мои цены
            </CustomLink>
          </div>
          <div className={styles.main}>
            <Outlet />
          </div>
        </main>
    )
};
export default MyProfile;
