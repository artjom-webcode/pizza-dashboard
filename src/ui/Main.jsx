import { Outlet } from "react-router-dom";

function Main() {
	return (
		<main className="bg-gray-100 overflow-y-scroll p-8">
			<div className="max-w-screen-xl	mx-auto">
				<Outlet />
			</div>
		</main>
	);
}

export default Main;
