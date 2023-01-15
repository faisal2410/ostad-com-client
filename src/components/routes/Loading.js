import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingGIF from "../../images/loading.gif";

const Loading=()=> {
  // state
  const [count, setCount] = useState(3);
  // hooks
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && navigate("/login");
    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <img src={LoadingGIF} alt="Loading" style={{ width: "400px" }} />
    </div>
  );
}

export default Loading;
