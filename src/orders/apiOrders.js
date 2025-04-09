import supabase from "../supabase";

export async function getOrdersApi() {
	let { data: orders, error } = await supabase.from("orders").select("*");

	if (error) {
		console.error(error);
		throw new Error("Orders could not loaded");
	}

	return orders;
}

export async function changeStatusApi(id) {
	const { data, error } = await supabase
		.from("orders")
		.update({ status: true })
		.eq("id", id)
		.select();

	if (error) {
		console.error(error);
		throw new Error("Status could not change");
	}
	return data;
}

export async function changeReadyTimeApi({ id, estimatedDelivery }) {
	// console.log(obj);
	const { data, error } = await supabase
		.from("orders")
		.update({ estimatedDelivery: estimatedDelivery })
		.eq("id", id)
		.select();

	if (error) {
		console.error(error);
		throw new Error("Status could not change");
	}
	return data;
}
