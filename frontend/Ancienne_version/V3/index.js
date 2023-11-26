import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';
import './index.css';


/*
//Compteur 
function Home(){
    const [conteur,setConteur] = useState(0)
  return (<>
        <h1>Conteur {conteur}</h1>
        <button onClick={()=>setConteur(conteur+1)}>++</button>
        <button onClick={()=>setConteur(conteur-1)}>--</button>
        </> );

}*/


function EtudiantForm(){

  //variables states ou sont stockés les données
  const [nom,setNom] = useState("");
  const [prenom,setPrenom] = useState("");
  const [age,setAge] = useState(0);
  const [etudiants,setEtudiants] = useState([]);


  function handlForm(event){
    //pour ne pas actualiser la page quand j'envoie le formulaire 
    event.preventDefault();
    const e={"nom":nom, "prenom":prenom, "age":age};
    //console.log(nom+""+prenom+""+age);
    const etudiantsCopy = etudiants.concat([e]);
    setEtudiants(etudiantsCopy);

  }

  function deleteEtudiant(index){
    const etudiantsCopy = etudiants.slice(); // Utilisation de slice pour créer une copie
    etudiantsCopy.splice(index, 1); // Utilisation de splice pour supprimer l'élément
    setEtudiants(etudiantsCopy);
  }

return (<>
      {/* <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Age</th>
          <th>Action</th>
    
        </tr>
        </thead>

        <tbody>
        {etudiants.map((elem,index)=>(
                            <tr key={index}>
                            <td>{elem.nom}</td>
                            <td>{elem.prenom}</td>
                            <td>{elem.age}</td>
                            <td><button onClick={deleteEtudiant}>Supprimer</button></td>
                            </tr>
                            ))}


        </tbody>
      </table> */}

      <div className="table-wrapper">
            <table  className="fl-table">
              <tr>
                <th className="text-center">Nom</th>
                <th className="text-center">Prenom</th>
                <th className="text-center">Age</th>
                <th className="text-center">Action</th>
              
              </tr>
              <tbody id="tbody"> 
                
                {etudiants.map((elem,index)=>(
                  <tr key={index}>
                    <td className="text-center">{elem.nom}</td>
                    <td className="text-center">{elem.prenom}</td>
                    <td className="text-center">{elem.age}</td>
                    <td className="text-center">
                    {/* Utilisation d'une icône de suppression de FontAwesome */}
                    <i className="fas fa-trash icon-rouge" onClick={() => deleteEtudiant(index)}></i>
                    <i className="fas fa-pencil-alt icon-bleue" onClick={() => deleteEtudiant(index)}></i>
                  </td>
                    </tr>
                ))}
              
              </tbody>
            </table>
          </div>



      <div className="form-wrapper">
      <form onSubmit={(e)=>handlForm(e)}>
        <label htmlFor= "nom"> Nom :</label>
        <input type="text" id="nom" onChange={(e)=>setNom(e.target.value)}/>
        <br/>

        <label htmlFor= "prenom"> Prenom :</label>
        {/* <label htmlFor= "prenom"> Prenom {prenom} :</label> */}
        <input type="text" id="prenom" onChange={(e)=>setPrenom(e.target.value)}/>
        <br/>

        <label htmlFor= "age"> Age :</label>
        <input type="number" id="age" onChange={(e)=>setAge(e.target.value)}/>
        <br/>

        <input type='submit' value={"Enregister"}/>
        <input type='reset' value={"Annuler"}/>

      </form>
      </div>
      </> );

}


const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<EtudiantForm />);

//root.render(<Home />);

reportWebVitals();
