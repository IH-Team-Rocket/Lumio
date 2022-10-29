import { /* Navigate ,*/ Route, Routes } from "react-router-dom";
import "./App.css";
import RegisterScreen from './screens/auth/register/RegisterScreen';
import LoginScreen from './screens/auth/login/LoginScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';
import ProtectedRoute from "./components/misc/ProtectedRoute";
import LoggedRoute from './components/misc/LoggedRoute';

function App() {
  // const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  // console.log(isSidebarOpen);
  
  // const handleAnywhereClick = (event) => {
  //   const sidebarNode = document.querySelector('#sidebar');
  //   console.log(isSidebarOpen);
  //   if (isSidebarOpen && !isDescendant(sidebarNode, event.target) && event.target.id !== 'sidebar') {
  //     console.log(event.target);
  //     setIsSidebarOpen(false);
  //   }
  // };

  // function isDescendant(parent, child) {
  //   var node = child.parentNode;
  //   while (node != null) {
  //       if (node == parent) {
  //           return true;
  //       }
  //       node = node.parentNode;
  //   }
  //   return false;
  // }
  // useEffect(() => {
  //   if(window.innerWidth < 1000) {
  //     console.log('se crea la app');
  //     document.addEventListener('click', handleAnywhereClick)
  //   }
  // }, [])

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
