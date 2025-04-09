import { useSearchParams } from "react-router-dom";

function Filter() {
	const [searchParams, setSearchParams] = useSearchParams();

	function handleClick(value) {
		searchParams.set("filter", value);
		setSearchParams(searchParams);
	}

	/* Для цвета кнопки 1) достаем что сейчас в url */
	const currentFilter = searchParams.get("filter") || "all";

	return (
		<div className="flex gap-3 border rounded px-2 py-1 bg-white shadow-sm">
			<button
				className={currentFilter === "uncompleted" ? "activeFilter" : "bg-inherit"}
				onClick={() => handleClick("uncompleted")}
			>
				Uncompleted
			</button>
			<button
				className={currentFilter === "completed" ? "activeFilter" : "bg-inherit"}
				onClick={() => handleClick("completed")}
			>
				Completed
			</button>

			<button
				className={currentFilter === "all" ? "activeFilter" : "bg-inherit"}
				onClick={() => handleClick("all")}
			>
				All
			</button>
		</div>
	);
}

export default Filter;
