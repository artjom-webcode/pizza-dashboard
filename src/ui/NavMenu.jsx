import { NavLink } from "react-router-dom";
import NavMenuItem from "./NavMenuItem";
import { IoAppsOutline, IoBagOutline, IoPizzaOutline, IoSettingsOutline } from "react-icons/io5";

function NavMenu() {
	return (
		<nav>
			<ul className="flex justify-around gap-7 lg:flex-col lg:items-center xl:items-start px-8">
				{/* <NavMenuItem to="/dashboard" navName="Home">
					<IoAppsOutline />
				</NavMenuItem> */}

				<NavMenuItem to="/menu" navName="Menu">
					<IoPizzaOutline />
				</NavMenuItem>

				<NavMenuItem to="/orders" navName="Orders">
					<IoBagOutline />
				</NavMenuItem>

				{/* <NavMenuItem to="/settings" navName="Settings">
					<IoSettingsOutline />
				</NavMenuItem> */}
			</ul>
		</nav>
	);
}

export default NavMenu;
