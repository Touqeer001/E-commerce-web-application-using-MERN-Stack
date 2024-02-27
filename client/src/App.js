import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";

import Dashboard from "./pages/user/Dashboard";
import AdminDashbord from "./pages/Admin/AdminDashbord";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import User from "./pages/Admin/User";
import PrivateRoute from "./components/Layout/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Layout/Routes/AdminRoute";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:slug" element={<CategoryProduct/>} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgot-password" element={<ForgotPasssword />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/policy" element={<Policy />}></Route>
        <Route path="/search" element={<Search />} />
        <Route path="/pagenotfound" element={<PageNotFound />}></Route>

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />}></Route>
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashbord />}></Route>
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-Product" element={<CreateProduct />} />
           <Route path="admin/product/:slug" element={<UpdateProduct />} /> 
          <Route path="admin/products" element={<Products />} />
        </Route>

        <Route path="/users" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
