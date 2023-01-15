import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth";
import Loading from "./Loading";
import axios from "axios";
const PrivateRoute=()=> {
  // context
  const [auth, setAuth] = useAuth();
  // state
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/auth-check`, {
        headers: {
          authorization:auth?.token
        }
      });
      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };

    if (auth?.token) authCheck();
  }, [auth?.token]);

  // useEffect(() => {
  //   if (auth?.token) {
  //     setOk(true);
  //   } else {
  //     setOk(false);
  //   }
  // }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;

}

export default PrivateRoute;
