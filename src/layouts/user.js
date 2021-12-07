import { Outlet } from "react-router";
import { Header } from "../screens/client/components/header/Header";
import { Footer } from "../screens/client/components/footer/Footer";

function UserLayout() {
  	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
  	);
}

export default UserLayout;
