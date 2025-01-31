import React from 'react'
import './Home.css'
import Header from '../Componentes/Header/Title_Header'
import { HeaderProvider } from '../Componentes/Header/HeaderProvider'
import Title_Header from '../Componentes/Header/Title_Header'
import { MainProvider } from '../Componentes/Main/MainProvider'
import Listcar from '../Componentes/Main/Listcar'
import { Main } from '../Componentes/Main/Main'


export default function Home() {
  return (
    <>
    <HeaderProvider  className='Header'   >
      <Header>
      <Title_Header>
      </Title_Header>
      </Header>
    </HeaderProvider>
    
    <MainProvider className='main' >
      <Main>
        <Listcar>
        </Listcar>
      </Main>
    </MainProvider>

    
    
    
    
    </>

  )
}
