import Menu from "./Menu";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="bg-primary text-text min-h-screen flex font-roboto">
      <Outlet />
      <Menu />
    </main>
  );
}

export default Main;
