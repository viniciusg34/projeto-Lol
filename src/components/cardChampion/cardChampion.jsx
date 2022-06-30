import React from 'react'
// import campeao from '../../assets/images/default.png'
import '../../assets/styles/campeoes/campeoes.css'


const Card = (props) =>{

    return(
        <div className='card'>
            <img className='championImage' src={props.obj.imagemDoHero} alt="foto do campeão" />
            <p className='championName stats'>Campeão: {props.obj.hero}</p>
            <p className='championClass stats'>Classe: {props.obj.classe}</p>
            <p className='championPrice stats'>preço: {props.obj.preco}</p>
            <p className='championSkills stats'>Skills: {props.obj.skillUm}, {props.obj.skillDois} </p>
            <p className='championSkills stats'>Skill passiva: {props.obj.skillPassiva}</p>
        </div>
    )
}

export default Card