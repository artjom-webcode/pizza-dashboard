import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

function AppLayout() {
	return (
		<div className="h-screen grid grid-rows-[auto_1fr_auto] lg:grid-cols-[100px_1fr] lg:grid-rows-[auto_1fr] xl:grid-cols-[250px_1fr]">
			<Header />
			<Main />
			<SideBar />
		</div>
	);
}

export default AppLayout;
