import { useState } from "react";
import { formatCurrency } from "../helpers";
import ChangePizza from "./ChangePizza";

function MenuBox({ pizza }) {
	const [openChange, setOpenChange] = useState(false);

	const { created_at, id, imageUrl, ingredients, name, soldOut, unitPrice } = pizza;
	return (
		<li className="border p-3 sm:basis-64 rounded  flex flex-col h-auto">
			<div>
				<img
					className={`  ${soldOut ? "opacity-70 grayscale" : ""}`}
					src={imageUrl}
					alt="name"
				/>
			</div>
			<div className="mx-5 my-2  flex  sm:block justify-between  ">
				<span className="text-sm text-gray-400">Pizza</span>
				<p>{name}</p>
			</div>

			<div className="mx-5 my-2 flex flex-wrap sm:block justify-between  ">
				<span className="text-sm text-gray-400">Price</span>
				{!soldOut ? (
					<p className="text-sm">{formatCurrency(unitPrice)}</p>
				) : (
					<p className="text-sm font-medium uppercase text-stone-500">Sold out</p>
				)}
			</div>

			<div className="mx-5 my-2  flex flex-wrap sm:block justify-between  ">
				<span className="text-sm text-gray-400">Ingredients</span>
				<p className="text-sm">{ingredients}</p>
			</div>
			<div className=" mt-auto pt-8">
				<button
					onClick={() => setOpenChange((showForm) => !showForm)}
					className="bg-orange-500 p-2 rounded text-center text-gray-100 w-full hover:bg-orange-600"
				>
					Change
				</button>
				{openChange && <ChangePizza closeForm={setOpenChange} pizzaToChange={pizza} />}
			</div>
		</li>
	);
}

export default MenuBox;
