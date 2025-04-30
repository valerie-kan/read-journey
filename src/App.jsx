import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./components/MainLayout";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import LibraryPage from "./pages/LIbraryPage/LIbraryPage";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route element={<MainLayout />}>
          <Route
            path="/recommended"
            element={<PrivateRoute component={<RecommendedPage />} />}
          />
          <Route
            path="/library"
            element={<PrivateRoute component={<LibraryPage />} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
