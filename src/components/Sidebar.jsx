import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
        <ul className=" list-unstyled">
            <li className="text-center">
                <Link className="text-decoration-none d-block py-2 px-3 mb-1" to={"products"}>get all Products</Link>
            </li>
            <li className="text-center">
                <Link className="text-decoration-none d-block py-2 px-3 mb-1" to={"categories"}>get all Categories</Link>
            </li>
        </ul>
    </>
  )
}
