import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
 
  return (
    <Layout>
      
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center" style={{ color: "white" }}>
            All Products List
          </h1>
          <div className="d-flex flex-wrap">
            {products?.length > 0 ? (
              products.map((p) => (
                
                
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card m-2" style={{ width: "18rem" }}>
                    <img
                      src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                      
                      className="card-img-top"
                      alt={p.name}
                    />
                     
                   
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "black" }}>
                        {p.name}
                      </h5>
                      <p className="card-text" style={{ color: "black" }}>
                        {p.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
