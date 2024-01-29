/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import '../pages/ProductDetails.css'

export default function ProductDetails() {
    let {productID} = useParams()
    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:3000/products/${productID}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    }, [])
    
  return (
    <Row className="ProductDetails my-3 align-items-center">
        <Col md={6} className="text-center">
            <img src={product.image} alt={product.title} />
        </Col>
        <Col md={6}>
            <h6 className=" text-black-50"><strong className="text-black">category :</strong> {product.category}</h6>
            <h2>{product.title}</h2>
            <p className=" text-black-50">{product.description}</p>
            <h5 className=" text-danger">{product.price}$</h5>
        </Col>
    </Row>
  )
}
