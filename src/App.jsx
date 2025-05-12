import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentUser, refreshUser, setToken } from "./redux/auth/operations";
import { selectIsRefreshing, selectToken } from "./redux/auth/selectors";

import { ErrorToast } from "./utils/errorToast";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import MainLayout from "./components/MainLayout";
import Loader from "./components/Loader";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const RecommendedPage = lazy(() =>
  import("./pages/RecommendedPage/RecommendedPage")
);
const LibraryPage = lazy(() => import("./pages/LibraryPage/LibraryPage"));
const ReadingPage = lazy(() => import("./pages/ReadingPage/ReadingPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;

    setToken(token);

    const restoreSession = async () => {
      try {
        const result = await dispatch(refreshUser()).unwrap();
        if (result?.token) {
          setToken(result.token);
          await dispatch(getCurrentUser()).unwrap();
        }
      } catch (err) {
        ErrorToast(err);
      }
    };

    restoreSession();
  }, [dispatch, token]);

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
          <Route
            path="/reading"
            element={<PrivateRoute component={<ReadingPage />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
