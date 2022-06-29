import React from 'react'
import campeao from '../../assets/images/default.png'
import '../../assets/styles/campeoes/campeoes.css'


const Card = () =>{

    return(
        <div className='card'>
            <img className='championImage' src={campeao} alt="foto do campeão" />
            <p className='championName'>Campeão: </p>
            <p className='championClass'>Classe: </p>
            <p className='championPrice'>preço: </p>
            <p className='championSkills'>Skills: </p>
        </div>
    )
}

export default Card