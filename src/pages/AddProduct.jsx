import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  let navigate = useNavigate()

  const formSubmit = (event) =>{
    event.preventDefault()

    // if (title && price && description && category && image != null) {
      fetch("http://localhost:3000/products",{
      headers: {
        "Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify({
        title,
        price,
        description,
        category,
        image
      }),
    }).then((res) =>res.json())
    .then((data)=>{
      data;
      navigate('/products')
    })
    }
  // }

  return (
    <>
      <h1 className="mb-4">Add Product</h1>
        <Form className="w-75" onSubmit={formSubmit}>
          <Form.Group className="mb-3" controlId="productTitle">
            <Form.Label>Add Product title</Form.Label>
            <Form.Control required onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Product Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ProductPrice">
            <Form.Label>Add Product Price</Form.Label>
            <Form.Control required onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Product Price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ProductDescription">
            <Form.Label>Add Product Description</Form.Label>
            <Form.Control required onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Product description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ProductCategory">
            <Form.Label>Add Product Category</Form.Label>
            <Form.Control required onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Product category" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ProductImage">
            <Form.Label>Add Product url image</Form.Label>
            <Form.Control required onChange={(e) => setImage(e.target.value)} type="url" placeholder="Product image" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add product
          </Button>
        </Form>
    </>
  )
}
