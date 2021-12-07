import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// layouts
import AdminLayout from './layouts/admin'
import UserLayout from './layouts/user'

// screens admin
import ProductList from "./screens/admin/product/ProductList";
import ProductCreate from "./screens/admin/product/ProductCreate";
import ProductEdit from "./screens/admin/product/ProductEdit";
 
import CategoryAdd from "./screens/admin/category/CategoryAdd";
import CategoryList from "./screens/admin/category/CategoryList";

import Login from "./screens/admin/auth/Login";

// screens client
import Shop from "./screens/client/shop/Shop";
import Cart from "./screens/client/cart/Cart"

// auth
import RequireAdmin from "./components/RequireAdmin";


const Router = (props) => {
  	return (
	    <BrowserRouter>
	      	<Routes>
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

		          	<Route path="category/list" element={<CategoryList />} />
		          	<Route path="category/create" element={<CategoryAdd />} />
		        </Route>

				<Route path="/*" element={<UserLayout />} >
					<Route index element={<Navigate to="shop" />} />
		          	<Route path="shop" element={<Shop />} />
		          	<Route path="cart" element={<Cart />} />
		        </Route>
				
	      	</Routes>
	    </BrowserRouter>
	)
};

export default Router;
