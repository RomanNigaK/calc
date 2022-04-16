import React from "react";
import {useNavigate} from "react-router";

const MyProfile=(props)=>{
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!props.isAuth) {
            navigate('/');
        }
    },[]);
    return(
        <h2>Мой профиль</h2>
    )
};
export default MyProfile;