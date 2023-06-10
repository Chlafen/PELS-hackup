import './App.css';
// router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignupUser from './pages/SignupUser';
import SignupRecruiter from './pages/SignupRecruiter';
import Login from './pages/Login';
import { AuthRoute, PrivateRoute } from './Route';
import useAuth from './hooks/useAuth';
import { useEffect, useState } from 'react';
import AuthService from './services/AuthService';
import Legal from './pages/Legal';
import Growth from './pages/Growth';
import Report from './pages/Report';


function App() {
  const { authenticatedUser, setAuthenticatedUser } = useAuth();
  const [isLoaded, setIsLoaded] = useState(false);

  const authenticate = async () => {
    try {
      // const authResponse = await AuthService.refresh();
      // setAuthenticatedUser(authResponse.user);
    } catch (error) {
      console.log("Error while authenticating: ", error);
    } finally {
      setIsLoaded(true);
    }
  };

  useEffect(() => {
    if (!authenticatedUser) {
      authenticate();
    } else {
      setIsLoaded(true);
    }
  }, []);


  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup/user" element={<SignupUser />} />
        <Route exact path="/signup/recruiter" element={<SignupRecruiter />} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/logout" element={<Login />} /> */}
        <Route exact path="/legal" element={<Legal />} />
        <Route exact path="/growth" element={<Growth />} />
        <Route exact path="/report" element={<Report />} />
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
