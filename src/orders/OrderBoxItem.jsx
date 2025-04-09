function OrderBoxItem({ text, data }) {
	return (
		<div className="mx-5 my-2 sm:basis-32 flex sm:block justify-between  basis-full">
			<span className="text-sm text-gray-400">{text}</span>
			<p>{data}</p>
		</div>
	);
}

export default OrderBoxItem;
