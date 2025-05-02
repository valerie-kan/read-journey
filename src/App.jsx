import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentUser, refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing, selectToken } from "./redux/auth/selectors";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./components/MainLayout";
import Loader from "./components/Loader";

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import LibraryPage from "./pages/LIbraryPage/LIbraryPage";
import { ErrorToast } from "./utils/errorToast";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  // const token = useSelector(selectToken);

  useEffect(() => {
    // if (!token) return;

    const restoreSession = async () => {
      try {
        const result = await dispatch(refreshUser()).unwrap();
        if (result) {
          await dispatch(getCurrentUser()).unwrap();
        }
      } catch (err) {
        ErrorToast(err);
      }
    };

    restoreSession();
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
}

export default App;
