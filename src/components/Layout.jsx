import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />

      {/* An <Outlet> renders the active route component, such as <Home /> or <Contact /> */}
      <Outlet />
    </>
  );
}
