import { useEffect, useState } from "react";

import './App.css'
import Card from "./componets/card/Card";

function App() {
  const [pokemon, setPokemon] = useState("charmander");
  const [data, setData] = useState(null);


  useEffect(()=>{
    const getData = async ()=>{
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const datos = await res.json()
        console.log (datos)
        setData (datos)
    }
  },[])

  return (
    <>
   {data && <Card   data={data}/>}
    </>
  )
}

export default App
