import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from './layouts/admin'
import ProductList from './components/ProductList/ProductList'
import NewProduct from './components/forms/NewProduct'


const Router = (props) => {
  	return (
	    <BrowserRouter>
	      	<Routes >
		        {/* Layout Admin */}
		        <Route path="admin/*" element={<AdminLayout />} >
		          	<Route index element={<Navigate to="dashboard" />} />
		          	<Route path="products/create" element={<NewProduct />} />
		          	<Route path="products/list" element={<ProductList />} />
		        </Route>
	      	</Routes>
	    </BrowserRouter>
	)
};

export default Router;
