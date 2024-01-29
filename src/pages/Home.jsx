import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import './Home.css'
export function Home() {
  const [product, setProduct] = useState([])
      {product.length=18}
  useEffect(()=>{
      fetch(`http://localhost:3000/products`)
      .then(res=>res.json())
      .then(data=>setProduct(data))
  }, [])
  
return (
  <Row>
    <h1 className="mb-4">Home page</h1>
      {product.map((item) =>{
       return(
        <Col lg={4} md={6} key={item.id} className="my-3">
          <img className="mb-3" src={item.image} alt={item.title} />
          <h6 className=" text-black-50"><strong className="text-black">category :</strong> {item.category}</h6>
          <h2 className=" fs-3">{item.title.slice(0,20)}</h2>
          <p className=" text-black-50">{item.description.slice(0,40)}</p>
          <h5 className=" text-danger">price : {item.price}$</h5>
        </Col>
       )
      })}
  </Row>
)
}
