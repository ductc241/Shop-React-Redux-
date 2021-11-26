import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import AdminLayout from './layouts/admin'
import UserLayout from './layouts/user'

// screens
import ProductList from "./screens/admin/product/ProductList";
import ProductCreate from "./screens/admin/product/ProductCreate";
import ProductEdit from "./screens/admin/product/ProductEdit";
import Login from "./screens/admin/auth/Login";

// auth
import RequireAdmin from "./components/RequireAdmin";


const Router = (props) => {
  	return (
	    <BrowserRouter>
	      	<Routes >
			  	<Route path="admin/login" element={<Login />} />

		        <Route path="admin/*" element={
					<RequireAdmin>
						<AdminLayout />
					</RequireAdmin>
				} >
		          	<Route index element={<Navigate to="dashboard" />} />
		          	<Route path="products/create" element={<ProductCreate />} />
		          	<Route path="products/list" element={<ProductList />} />
		          	<Route path="products/edit/:id" element={<ProductEdit />} />
		        </Route>

				<Route path="/*" element={<UserLayout />} >
		          	<Route path="products/create" element={<ProductCreate />} />
		          	<Route path="products/list" element={<ProductList />} />
		          	<Route path="products/edit/:id" element={<ProductEdit />} />
		        </Route>
				
	      	</Routes>
	    </BrowserRouter>
	)
};

export default Router;
