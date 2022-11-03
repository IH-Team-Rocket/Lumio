import { /* Navigate ,*/ Route, Routes } from "react-router-dom";
import "./App.scss";
import RegisterScreen from './screens/auth/register/RegisterScreen';
import LoginScreen from './screens/auth/login/LoginScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';
import ProtectedRoute from "./components/misc/ProtectedRoute";
import LoggedRoute from './components/misc/LoggedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<LoggedRoute><RegisterScreen/></LoggedRoute>}/>
        <Route path="/login" element={<LoggedRoute><LoginScreen/></LoggedRoute>}/>
        <Route path="/*" element={
          <ProtectedRoute>
            <DashboardScreen/>
          </ProtectedRoute>
        }/>
      </Routes>
    </div>
  );
}

export default App;
