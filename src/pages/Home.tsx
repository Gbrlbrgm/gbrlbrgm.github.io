import React , {useState, useEffect} from 'react'
import './Home.css'
import AppBarDorf  from '../layout/AppBarDorf'
import FooterDorf from '../layout/FooterDorf'
import Card from '../components/Card'
import api from "../../service/api.js"

export const Home = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    api
      .get('/api')
      .then(({data}) => {
        setData(data)
      })
  }, []);

  console.log(data)
  
  return (
    <div className="Home">
        <AppBarDorf />
        <Card title={data.listaViajem[0].title} 
              kml={data.listaViajem[0].consumoMedio + "KM"} 
              revisao={"Em "+ data.listaViajem[0].revisao + " Dias"} 
              distancia={data.listaViajem[0].distanciaPercorrida + "KM"} 
              conbustivelRestante={data.listaViajem[0].autonomia + "KM"} 
              calibragem={data.listaViajem[0].calibragem} 
              oleoTroca={"Em " + data.listaViajem[0].trocaOleo + " Dias"} />

        <Card title={data.listaViajem[1].title} 
              kml={data.listaViajem[1].consumoMedio + "KM"} 
              revisao={"Em "+ data.listaViajem[1].revisao + " Dias"} 
              distancia={data.listaViajem[1].distanciaPercorrida + "KM"} 
              conbustivelRestante={data.listaViajem[1].autonomia + "KM"} 
              calibragem={data.listaViajem[1].calibragem} 
              oleoTroca={"Em " + data.listaViajem[1].trocaOleo + " Dias"} />

        <Card title={data.listaViajem[2].title} 
              kml={data.listaViajem[2].consumoMedio + "KM"} 
              revisao={"Em "+ data.listaViajem[2].revisao + " Dias"} 
              distancia={data.listaViajem[2].distanciaPercorrida + "KM"} 
              conbustivelRestante={data.listaViajem[2].autonomia + "KM"} 
              calibragem={data.listaViajem[2].calibragem} 
              oleoTroca={"Em " + data.listaViajem[2].trocaOleo + " Dias"} />


        <FooterDorf />
    </div>
  )
}

export default Home