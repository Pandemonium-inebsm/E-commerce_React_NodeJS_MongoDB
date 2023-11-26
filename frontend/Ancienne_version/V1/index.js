import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*//methode avec javascript classic : 
const myElem=React.createElement('h1',{},'Bonjour tout le monde');
*/

/*//creer des element avec la methode avec JSX : 
//(si je ne veux pasutiliser de balise principale je peux utiliser des fragements <> </>)

const myElem= <div>
                <h1>Bonjour tout le monde </h1>
                <h1>Bonjour Ichraq </h1>
              </div>;

*/

/*
let a=7;
let b=3;
const myElem=  <h1>a+b = {a+b} </h1>*/

/*
let a=7;
let b=3;
const myElem=  <h1>Max a et b = {(a>b)?a:b} </h1>*/

/*
const vals = [12 ,6 ,19, 19, 12];
const myElem=<ul>
                {vals.map(elem=><li>{elem}</li> )}

            </ul>
*/

/*const etudiants = [
                    {"id": 1,"nom":"Said", "prenom": "Sara","age": 18},
                    {"id": 2,"nom":"Laarbi", "prenom": "Souad","age": 10},
                    {"id": 3,"nom":"Farid", "prenom": "Maissan","age": 12},
                    {"id": 4,"nom":"Said", "prenom": "Ines","age": 24}];

                    const myElem=<div className="table-wrapper">
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
                                </div>
*/

/*function EtudiantList(){
  return (<ul>
            <li key={1}> Queen Bee </li>
            <li key={2}> Ichraq </li>
            <li key={3}> Pandemonium </li>
        </ul>);
}

const p={"name": "Mustapha ", "num":3}
function Home(props){
  return (<>
        <h1>Bonjour Mme {props.name} vous etes {props.description}</h1>
        <h1>Bonjour Mr {props.person.name} vous avez {props.person.num} enfants</h1>
        <EtudiantList/>
        </> );

}*/

const root= ReactDOM.createRoot(document.getElementById('root'))


//root.render(myElem);
//root.render(<Home name="Loubna" description="la meilleure maman au monde" person={p} />);




/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
