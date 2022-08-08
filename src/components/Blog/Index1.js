
import React from 'react'
import Carsouledata from './carusole/Carusole'
import Carusole from './carusole/Carsouledata'
import Header from './Header'

import Beauty from './beauty/Beautydata'
import Beautydata from './beauty/Beautydata'
import Wedding from './beauty/Wedding'
import Weddingdata from './beauty/Weddingdata'
import Menu from './menu/Menu'
import Component from './menu/Component'
import Vedio from './menu/Vedio'

function Index1() {
  return (
    <div>

    
    
        <Header/>
        <Component />
       <Carusole />
       <Beautydata />
       <Weddingdata />
       

    </div>
  )
}

export default Index1