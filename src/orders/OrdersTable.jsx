import { useQuery } from "@tanstack/react-query";
import { getOrdersApi } from "./apiOrders";
import Spinner from "../ui/Spinner";
import OrderBox from "./OrderBox";
import { useSearchParams } from "react-router-dom";

function OrdersTable() {
	const {
		isLoading,
		data: orders,
		error,
	} = useQuery({
		queryKey: ["orders"],
		queryFn: getOrdersApi,
	});
	const [searchParams] = useSearchParams();

	if (isLoading) return <Spinner />;
	// console.log(orders);
	/* Чтобы прочитать данные в другом компоненте (он должен находится в том же пути) 
	используем тот же хук. Но метод get/ Когда мы переходим первый раз на страницу по дефолту мы хотим чтобы в строке был all */
	const filterValue = searchParams.get("filter") || "all";

	orders.sort((a, b) => b.id - a.id);
	/* Тут у нас проверка что сохранено в url и массив с заказами тогда сортеруем. */
	let filteredOrders;
	if (filterValue === "all") filteredOrders = orders;

	if (filterValue === "completed")
		filteredOrders = orders.filter((order) => order.status === true);

	if (filterValue === "uncompleted")
		filteredOrders = orders.filter((order) => order.status === false);

	return (
		<>
			<ul>
				{filteredOrders.map((order) => (
					<OrderBox key={order.id} order={order} />
				))}
			</ul>
		</>
	);
}

export default OrdersTable;
