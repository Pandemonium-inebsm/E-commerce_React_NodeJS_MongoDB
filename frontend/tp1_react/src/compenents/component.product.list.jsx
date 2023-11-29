import {useEffect ,useState} from "react";

import { deleteProductByID, getAllProducts } from "../services/product.services";
import { Link } from "react-router-dom";

import "../../src/product.css"

export function ProductList(){
    const [products,setProducts] = useState([]);
  
    useEffect(()=>{
      fetchProducts();
    },[])
  
    async function fetchProducts(){
      const res=await getAllProducts()
      setProducts(res.data);
    }
  
    async function deleteProduct(id){
      const res=await deleteProductByID(id)
      fetchProducts();
    }

    return (<>


<div className="table-wrapper">
  <Link to={"/categories"} className="add-product-button">
    Nouveau Produit
  </Link>
  <div className="container mt-5 shadow">
    <table className="fl-table">
      <thead>
      <tr>
        <th className="text-center">Name</th>
        <th className="text-center">Price</th>
        <th className="text-center">Categorie</th>
        <th className="text-center">Action</th>
      </tr>
      </thead>
      <tbody id="tbody">
        {products.map((elem, index) => (
          <tr key={index}>
            <td className="text-center">{elem.name}</td>
            <td className="text-center">{elem.price}</td>
            <td class="text-center">{elem.category.name}</td>
            <td className="text-center">
              {/* Utilisation d'une icône de suppression de FontAwesome */}
              <i className="fas fa-trash icon-rouge" onClick={() => deleteProduct(elem._id)}></i>
              {/* <i className="fas fa-pencil-alt icon-bleue" onClick={() => deleteProduct(elem._id)}></i> */}
              
              <Link to= {`/products/edit/${elem._id}`} className="fas fa-pencil-alt icon-bleue">
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



            

       
        </> );

}