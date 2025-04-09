import { useQuery } from "@tanstack/react-query";
import { getMenuApi } from "./apiMenu";
import MenuBox from "./MenuBox";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import ChangePizza from "./ChangePizza";

function MenuTable() {
	const {
		isLoading,
		data: menu,
		error,
	} = useQuery({
		queryKey: ["menu"],
		queryFn: getMenuApi,
	});

	if (isLoading) return <Spinner />;

	menu.sort((a, b) => a.id - b.id);

	return (
		<div>
			<ul className="flex  flex-wrap justify-center gap-4">
				{menu.map((pizza) => (
					<MenuBox key={pizza.id} pizza={pizza} />
				))}
			</ul>
		</div>
	);
}

export default MenuTable;
