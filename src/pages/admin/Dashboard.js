import { useAuth } from "../../context/auth";
import Jumbotron from "../../components/cards/Jumbotron";

const AdminDashboard=()=> {
  // context
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron
        title={`Hello ${auth?.user?.name}`}
        subTitle="Admin Dashboard"
      />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </>
  );
}

export default AdminDashboard;
