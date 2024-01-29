import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    getAllProducts()
  }, []);

  const getAllProducts = () =>{
    fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  } 
  const deleteProduct = (product) =>{
    
    Swal.fire({
      title: `Are You Sure To Delete ${product.title} ?`,
      showCancelButton : true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:3000/products/${product.id}`, {
        method: "DELETE"
      })
      .then((res) => res.json())
      .then((data) => getAllProducts(data))
      }
    })
  }

  return (
    <>
      <h1 className="mb-3">products page</h1>
      <Link to={"/products/add"} className=" btn btn-success mb-4">Add New Product</Link>
      <h3 className="mb-3">Counter Of Products : <strong className="text-danger">{products.length}</strong></h3>
        <table className="table table-striped border text-center">
          <thead>
            <tr>
              <th className=" border">ID</th>
              <th className=" border">Title</th>
              <th className=" border">description</th>
              <th className=" border">Price</th>
              <th className=" border">operations</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>{
              return (
                <tr key={product.id}>
              <td className=" border">{product.id}</td>
              <td className=" border">{product.title}</td>
              <td className=" border">{product.description}</td>
              <td className=" border">{product.price}$</td>
              <td className=" border">
                <button className="btn btn-danger btn-sm my-1 w-100" onClick={()=>deleteProduct(product)}>Delete</button>
                <Link className="btn btn-success btn-sm my-1 w-100" to={`/products/${product.id}`}>View</Link>
                <button className="btn btn-primary btn-sm my-1 w-100">Edit</button>
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
    </>
  )
}
