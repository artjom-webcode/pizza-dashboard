import ChangePizza from "../menu/ChangePizza";
import MenuTable from "../menu/menuTable";

function Menu() {
	return (
		<div>
			<header className="border-b-4 flex justify-between items-center gap-2 mb-10 pb-5">
				<h2 className="text-3xl ">Menu</h2>
			</header>
			<MenuTable />
		</div>
	);
}

export default Menu;
