import NavMenu from "./NavMenu";
import Logo from "./Logo";

function SideBar() {
  return (
    <aside className=" fixed bottom-0 left-0 w-full lg:w-28 lg:h-full bg-slate-50 border-t lg:border-r border-gray-300 py-8 px-6  lg:row-span-full xl:w-56">
      <Logo />
      <NavMenu />
    </aside>
  );
}

export default SideBar;
