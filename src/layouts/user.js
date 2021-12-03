import { Outlet } from "react-router";
import { Header } from "../screens/client/components/header/Header";

function UserLayout() {
  	return (
		<>
			<Header />
			<Outlet />
		</>
  	);
}

export default UserLayout;
