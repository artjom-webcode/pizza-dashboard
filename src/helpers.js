export function formatDate(dateStr) {
	return new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	}).format(new Date(dateStr));
}

export function formatCurrency(value) {
	return new Intl.NumberFormat("en", {
		style: "currency",
		currency: "EUR",
	}).format(value);
}
