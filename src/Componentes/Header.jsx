import React from 'react'
import ListaAutos from '../helpers/ListaAutos.json'


function ElementoLista(props) {
    return(
        <li>
            <a href={props.fram.web}>{props.fram.name}</a>
        </li>
    );
}

export default function Header() {
  return (
    <div>
      <h1>Autos japoneses</h1>
        <h2>Renderizado de Autos</h2>

        <h3>Carros japoneses</h3>
        <ul>
                {
                ListaAutos.autos.map((el) => (<ElementoLista  key ={el.id} fram={el}/>
                ))}
            </ul>
      
    </div>
  )
}
