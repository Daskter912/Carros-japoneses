import React from 'react'
import '../App.css'
import Header from '../Componentes/Header/Title_Header'
import { HeaderProvider } from '../Componentes/Header/HeaderProvider'
import Title_Header from '../Componentes/Header/Title_Header'
import { MainProvider } from '../Componentes/Main/MainProvider'
import Info_car from '../Componentes/Main/Info_car'
import { Main } from '../Componentes/Main/Main'
import Car_imagen from '../Componentes/Main/Car_imagen'
import Tech_info from '../Componentes/Main/Tech_info'
import Awar_car from '../Componentes/Main/Awar_car'


export default function Home() {
  return (
    <div className='container__item'>
    <HeaderProvider>
      <Header>
      <Title_Header>
      </Title_Header>
      </Header>
    </HeaderProvider>
    <MainProvider  >
      <Main>
        <Car_imagen></Car_imagen>
        <Info_car></Info_car>
        <Tech_info/>
        <Awar_car/>


        
      </Main>
    </MainProvider>

    
    
    
    
    </div>

  )
}
