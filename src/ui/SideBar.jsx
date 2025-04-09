import NavMenu from "./NavMenu";
import Logo from "./Logo";

function SideBar() {
	return (
		<aside className="bg-slate-50 border-t lg:border-r border-gray-300 py-8 px-6  lg:row-span-full">
			<Logo />
			<NavMenu />
		</aside>
	);
}

export default SideBar;
