import React from 'react'
import Listcar from '../Componentes/Listcar'
import './Home.css'
import Header from '../Componentes/Header/Title_Header'
import { HeaderProvider } from '../Componentes/Header/HeaderProvider'
import Title_Header from '../Componentes/Header/Title_Header'

export default function Home() {
  return (
    <>
    <HeaderProvider>
      <Header>
      <Title_Header>
      </Title_Header>
      </Header>
    </HeaderProvider>
    
    
    
    
    </>

  )
}
