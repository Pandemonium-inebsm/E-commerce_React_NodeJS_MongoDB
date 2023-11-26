import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const etudiants = [
  {"id": 1,"nom":"Said", "prenom": "Sara","age": 18},
  {"id": 2,"nom":"Laarbi", "prenom": "Souad","age": 10},
  {"id": 3,"nom":"Farid", "prenom": "Maissan","age": 12},
  {"id": 4,"nom":"Said", "prenom": "Ines","age": 24}];

function EtudiantList(){
  return (<div className="table-wrapper">
            <table  className="fl-table">
              <tr>
                <th className="text-center">id</th>
                <th className="text-center">Nom</th>
                <th className="text-center">Prenom</th>
              
              </tr>
              <tbody id="tbody"> 
                
                {etudiants.map(
                  etudiants=><tr>
                    <td className="text-center">{etudiants.id}</td>
                    <td className="text-center">{etudiants.nom}</td>
                    <td className="text-center">{etudiants.prenom}</td>
                    </tr>
                )}
              
              </tbody>
            </table>
          </div>);
        }

        function Formulaire(){
          return (<div class="design">
                    <form action="/ma-page-de-traitement" method="post">
                    
                      
                          <label for="id">id</label>
                          <input type="text" id="name" name="user_name" />
                        
                          <label for="nom">nom</label>
                          <input type="text" id="name" name="user_name" />
                      
                          <label for="prenom">prenom</label>
                          <input type="text" id="name" name="user_name" />
                          <input type="submit" value="Submit"/>
                    </form>
                  </div>);
        }


                
//Nom de la fonction commance par majiscule 

function Home(props){
  return (<>
        <EtudiantList/>
        <Formulaire/>
        </> );

}

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<Home />);


reportWebVitals();
