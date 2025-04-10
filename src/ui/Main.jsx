import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="bg-gray-100 overflow-y-scroll p-8 lg:pl-32 xl:pl-60 ">
      <div className="max-w-screen-x mx-auto pb-20">
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
