import React from 'react'
import '../App.css'
import Header from '../Componentes/Header/Title_Header'
import { HeaderProvider } from '../Componentes/Header/HeaderProvider'
import Title_Header from '../Componentes/Header/Title_Header'
import { MainProvider } from '../Componentes/Main/MainProvider'
import Listcar from '../Componentes/Main/Listcar'
import { Main } from '../Componentes/Main/Main'


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
        <Listcar>
        </Listcar>
      </Main>
    </MainProvider>

    
    
    
    
    </div>

  )
}
