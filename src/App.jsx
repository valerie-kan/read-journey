import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./components/MainLayout/MainLayout";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

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
        <Route
          path="recomended"
          element={
            <PrivateRoute path="/recomended" component={<MainLayout />} />
          }
        />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
