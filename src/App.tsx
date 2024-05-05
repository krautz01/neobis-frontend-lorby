import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./pages/LogInPage/LogInPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { useAppSelector } from "./redux/hooks";
import Dashboard from "./pages/Dashboard/Dashboard";
import ResendPassPage from "./pages/ResendPassPage/ResendPassPage";

function App() {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route path={"/dashboard"} element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<LogInPage />} />
          <Route path={"/register"} element={<RegistrationPage />} />
          <Route path={"/resend-email"} element={<ResendPassPage />} />
          <Route />
        </Routes>
      )}
    </>
  );
}

export default App;
