import { Outlet } from "react-router";
import { Header } from "../screens/client/header/Header";
import { Shop } from "../screens/client/Shop/Shop";

function UserLayout() {
  	return (
		<>
			<Header />
			<Outlet />
		</>
  	);
}

export default UserLayout;
