import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import Secret from "./pages/Secret";
import AdminDashboard from "./pages/admin/Dashboard";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};


const App = () => {
  return (
  
    <BrowserRouter>
      <Menu />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} >

        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="" element={<Dashboard />} /> 
          <Route path="secret" element={<Secret />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<PageNotFound />} replace />
     
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;