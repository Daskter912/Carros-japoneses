import React from 'react'
import '../App.css'
import Header from '../Componentes/Header/Header'
import Info_car from '../Componentes/Main/Componentets/Info_car'
import { Main } from '../Componentes/Main/Main'
import Car_imagen from '../Componentes/Main/Componentets/Car_imagen'
import Tech_info from '../Componentes/Main/Componentets/Tech_info'
import Awar_car from '../Componentes/Main/Componentets/Awar_car'
import { UseContextBrand } from '../Context/UseContextBrand'





export default function Home() {
  return (
    <div className='container__item'>
      <UseContextBrand>
      <Header></Header>
      <Main>
        <Car_imagen></Car_imagen>
        <Info_car></Info_car>
        <Tech_info/>
        <Awar_car/>
      </Main>


      </UseContextBrand >
      
    </div>

  )
}
