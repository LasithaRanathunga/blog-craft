import { Link, Outlet } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";

function NavItem({ Icon, path, label }) {
  return (
    <Link
      className="flex items-center hover:bg-green-200 p-2 rounded-md font-semibold"
      to={path}
    >
      {<Icon className="mr-4 text-xl" />}
      <span className="text-xl">{label}</span>
    </Link>
  );
}

export default function Admin() {
  return (
    <div className="h-dvh overflow-auto flex">
      <nav className="h-full w-[20%] border-r-2 border-gray-200 p-5">
        <div className="font-black text-3xl text-green-400 cursor-pointer mb-8">
          Logo
        </div>
        <NavItem label="New Article" Icon={TfiWrite} path="new-article" />
      </nav>
      <main className=" w-[80%] m-4">
        <Outlet />
      </main>
    </div>
  );
}
