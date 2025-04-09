import { NavLink } from "react-router-dom";

function NavMenuItem({ children, navName, to }) {
	return (
		<li className="text-2xl hover:text-yellow-500 xl:text-lg">
			<NavLink
				className="flex gap-4  items-center "
				style={({ isActive }) => ({
					color: isActive ? "#eab308" : "inherit",
				})}
				to={to}
			>
				{children}
				<span className="hidden xl:block">{navName}</span>
			</NavLink>
		</li>
	);
}

export default NavMenuItem;
