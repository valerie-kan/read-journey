import { Outlet } from "react-router-dom";

import Container from "./Container/Container";
import Header from "./Header/Header";

const MainLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
