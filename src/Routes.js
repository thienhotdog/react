import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import WebsiteLayout from "./layouts/Website";
import AddProduct from "./pages/admin/add_1";

import Addproduct_2 from "./pages/admin/add_2";
import EditProductForm from "./pages/admin/edit";
import ListProduct from "./pages/admin/list";

const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes >

        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<div>Home page</div>} />
          <Route path="product" element={<div>Product page</div>} />
          <Route path="contact" element={<div>Contact</div>} />
        </Route>

        {/* Layout Admin */}
        <Route path="admin/*" element={<AdminLayout />} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<ListProduct {...props} />} />
          <Route path="addproduct2" element={<Addproduct_2 {...props} />} />
          <Route path="addproduct" element={<AddProduct {...props} />} />
          <Route path="products/:id/edit" element={<EditProductForm {...props} />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};



export default Router;
