import supabase from "../supabase";

export async function getMenuApi() {
	let { data: menu, error } = await supabase.from("menu").select("*");

	if (error) {
		console.error(error);
		throw new Error("Orders could not loaded");
	}

	return menu;
}

export async function editPizzaApi(newPizzaData, id) {
	console.log(newPizzaData, id);

	const { data, error } = await supabase.from("menu").update(newPizzaData).eq("id", id).select();
}
