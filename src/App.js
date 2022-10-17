import { /* Navigate ,*/ Route, Routes } from "react-router-dom";
import "./App.css";
/* import ProtectedRoute from "./components/misc/ProtectedRoute"; */
import RegisterScreen from './screens/auth/register/RegisterScreen';
import LoginScreen from './screens/auth/login/LoginScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/" element={<DashboardScreen/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
