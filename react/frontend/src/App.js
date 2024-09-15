import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./views/Navbar";
import Registerpage from "./views/Registerpage";
import Loginpage from "./views/Loginpage";
import Homepage from "./views/Homepage";
 // No destructuring needed here

import PrivateRoute from "./utils/privateRoutes";
import Dashboard  from "./views/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* PrivateRoute needs to wrap Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
