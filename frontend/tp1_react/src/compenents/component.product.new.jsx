import { useState , useEffect } from 'react';

import '../index.css';
import { addProduct, getAllProduct } from '../services/product.services';
import { useNavigate } from 'react-router-dom';
import { getAllCategories } from '../services/categorie.services';


export function CategorieAddForm(){
  const [name,setName] = useState("");
  const [price,setPrice] = useState(0);
  const [selectedCat,setSelectedCat]= useState(0);
  const [categories, setCategories]=useState([]);
  const navigate=useNavigate();
  
  useEffect(()=>{
    fetchCategories()
  },[])

  async function fetchCategories() {
      const res = await getAllCategories(); // Note the function call here
      setCategories(res.data);
  }

  async function handlForm(event){
    event.preventDefault(); 
    const p={"name":name,"price":price, "category":categories[selectedCat]}
    await addProduct(p);
    navigate("/products");
  
  }
  
  return (
    <>

    <div className="form-wrapper">

        <form onSubmit={(e)=>handlForm(e)}>
  
            <div class="container">
        <label className="form-label" htmlFor="name">Name:</label>
        <input className="form-control" type="text" id="name" onChange={(e) => setName(e.target.value)} />

        <label className="form-label" htmlFor="price">Price:</label>
        <input className="form-control" type="number" id="price" onChange={(e) => setPrice(e.target.value)} />

        <label className="form-label" htmlFor="categorie">Categorie:</label>
        <select className="form-control" onChange={(e)=>setSelectedCat(e.target.value)}>
            {categories.map((category)=><option value={category._id}>{category.name}</option>)}
        </select>

          <input className="sub m-2" type='submit' value={"Enregister"} />
          <input className="res m-2" type='reset' value={"Annuler"} />
        
      </div>
  
        </form>

    </div>
    </>

    
);
}