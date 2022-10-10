import React , {useState, useEffect} from 'react'
import './Card.css'

export default function Card(props) {

    return (
      <div className="Card">
        <h6 className="Title">{props.title}</h6>
        <hr />
        <p className="Label">Distancia percorrida:   {props.distancia}</p>
        <p className="Label">{"Consumo médio(KM/L):   "+props.kml}</p>
        <p className="Label">Autonomia combustível restante:   {props.conbustivelRestante}</p>
        <p className="Label">Calibragem dos pneus:   {props.calibragem}</p>
        <p className="Label">Troca de oleo:   {props.oleoTroca}</p>
        <p className="Label">Aviso de revisão:   {props.revisao}</p>
      </div>
    );
  }