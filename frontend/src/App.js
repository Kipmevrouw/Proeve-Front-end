import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Studentpage from "./pages/Studentpage";
import Subpage from "./pages/Subpage";
import ProtectedRoute from "./components/Login-Components/LoginForm/ProtectedRoute";
import Logout from "./components/Login-Components/LoginForm/Logout";
import SuccessPage from "./components/Signup-Components/SignupForm/Succespage";
import Policypage from "./pages/Policypage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/workshops" element={<Subpage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/policy" element={<Policypage />}></Route>
        <Route path="/signup" element={<Signuppage />}></Route>
        <Route path="/succes" element={<SuccessPage />}></Route>
        <Route
          path="/studentpage"
          element={
            <ProtectedRoute>
              <Studentpage />
            </ProtectedRoute>
          }
        ></Route>
         <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </>
  );
}

export default App;
