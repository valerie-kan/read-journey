import { Route, Routes } from "react-router";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { Toaster } from "react-hot-toast";
import RestrictedRoute from "./components/RestrictedRoute";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        {/* <Route> */}
        <Route
          path="login"
          element={<RestrictedRoute path="/login" component={<LoginPage />} />}
        />
        <Route
          path="register"
          element={
            <RestrictedRoute path="/register" component={<RegisterPage />} />
          }
        />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
