import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className=" min-h-screen min-w-full bg-gradient-to-r from-indigo-400 to-violet-500">
      <div className=" px-96 pt-10">
        <Outlet />
      </div>
    </div>
  );
}
