import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import React, { useEffect, useState} from 'react';
import Card from '../../components/cardChampion/cardChampion';
import '../../assets/styles/campeoes/campeoes.css'
import { apiLol } from '../../services/api'

export const Campeoes = () =>{

    const [classe, setClasse] = useState([])
    const listarClasse = () =>{
        apiLol.get(`/classe`)
        .then(resultado =>{
            console.log(resultado.data)
            setClasse(resultado.data)
        })
    }
    
    useEffect(()=>{    
        listarClasse()
    }, [])
    
    const [champion, setChampion] = useState([])
    useEffect(() => {

        let quantidadeClasses = classe.length;

        for (let index = 0; index < quantidadeClasses; index++) {
            apiLol.get(`/classe/${index + 1}/hero`)
                .then(resultado => {
                    setChampion(champion => champion.concat(resultado.data))
                });
        }
    },  [classe.length]);

    useEffect(() => {
        console.log(champion)
    },  [champion]);



    return(
        <>
            <Header/>
            <div className='campeoesMain'>
                <div classsName='containerCards'>
                    {
                        champion.map( () =>{
                            return(
                                <Card/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}