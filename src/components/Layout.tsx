import { Stack } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Stack>
      <Navbar />
      <Outlet />
    </Stack>
  );
};

export default Layout;
