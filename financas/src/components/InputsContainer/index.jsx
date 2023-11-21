import { alignProperty } from '@mui/material/styles/cssUtils'
import { useEffect, useState } from 'react'
import {api} from '../../services/api'
import './styles.css'

export const InputsContainer = ({addItens}) => {
  const [data, setData] = useState('')
  const [descricao, setDescricao] = useState("")
  const [titulo, setTitulo] = useState('')
  const [valor, setValor] = useState('')
  const [categoria_id,setCategoria_Id]= useState('');

  const [nameCategoria, setNameCategoria]= useState([])

  
  useEffect(() => {
    api.get('listar/categoria/0').then(response => {
      console.log(response.data.rows)
     
    })
  },[])

  function handleAddItems() {
    const dados= {
      data,
      categoria_id,
      titulo,
      valor
    }
    
    addItens({dados})
    console.log("Dados coletados ",dados)
  }

    return (



      <section className="inputs-container"> 
      <div className="container-input">
        <label htmlFor="data">Data</label>
        <input 
        type="date" 
        value={data}
        onChange={(e) => {setData(e.target.value)}}
        />

      </div>

      <div className="container-input">
        <label htmlFor="category">Categoria</label>
        <select onChange={(e) => {setCategoria_Id(e.target.value)}}>
          <option value="Ganho">Ganho</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>

      <div className="container-input">
        <label htmlFor="title">Titulo </label>
        <input 
            type="text"
            value={titulo}
            onChange={(e) => {setTitulo(e.target.value)}}
        
        />
         

      </div>
      
      <div className="container-input">
        <label htmlFor="value">Valor</label>
        <input 
        type="number"
        value={valor}
        onChange={(e) => {setValor(e.target.value)}}
        />
      </div>
      
      
      <div className="container-input">
        <button onClick={handleAddItems}>Adicionar</button>
      </div>

      

      </section>
    )
}