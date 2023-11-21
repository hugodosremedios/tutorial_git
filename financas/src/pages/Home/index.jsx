import {Header} from "../../components/Header"
import {Information} from "../../components/Information"
import {InputsContainer} from "../../components/InputsContainer"
import { InfoTable } from "../../components/InfoTable"

import './styles.css'
import { api } from "../../services/api"
import { useEffect, useState } from "react"


export const Home = () =>{
   const [list, setlist] = useState([])

useEffect(()=> {
  api.get('/listar/financa/0').then(response => {
    console.log(response.data.rows)
    setlist(response.data.rows)
      
  })
},[])



  function handleSaveItens(item)
  {
    const data = item.dados
    api.post('/criar/financa', data).then(response => {
        console.log(response)
    })
    api.get('/listar/financa/0').then(response => {
      console.log(response.data.rows)
      setlist(response.data.rows)    
    }) 
    
  }

function handleSeachFinancasfromDate(data)
{
  api.get(`/listar/financa/dataInicial/${data.dataInicial}/dataFinal/${data.dataFinal}/page/`)
  .then(response =>{
    setlist(response.data.rows)
  } )
}

    return (
        <div className="container">
        <Header/>
        <Information list={list} onSeach={handleSeachFinancasfromDate}/>
        <InputsContainer addItens={handleSaveItens}/>
        <InfoTable list={list}/>
        
        </div>
        
    )
}