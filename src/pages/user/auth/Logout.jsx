import { setTokens, setUser } from "@redux/slices/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTokens({accessToken: "", refreshToken: ""}));
        dispatch(setUser(null));
        navigate("/");
    }, [location, navigate]);

    return null
}
 
export default Logout;