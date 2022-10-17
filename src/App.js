import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/misc/ProtectedRoute";
import RegisterScreen from './screens/auth/register/RegisterScreen';
import LoginScreen from './screens/auth/login/LoginScreen';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegisterScreen/>}/>
        <Route path="/login" element={<LoginScreen/>}/>
        <Route path="/" element={<Dashboard/>}>
          <Sidebar/>
          <Routes>
            <Route path="/dashboard" element={}/>
            <Route path="/billing" element={}/>
            <Route path="/market" element={}/>
            <Route path="/user" element={}/>
          </Routes>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
