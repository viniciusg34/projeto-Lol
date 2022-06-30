import '../../assets/styles/campeoes/campeoes.css'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import { apiLol } from '../../services/api'
import React, { useEffect, useState} from 'react';
import Card from '../../components/cardChampion/cardChampion';

export const Campeoes = () =>{

    const [champion, setChampion] = useState([])
    const champions = () =>{
        apiLol.get(`/champions`)
        .then(resultado =>{
            console.log(resultado.data)
            setChampion(resultado.data)
        })
    }
    
    useEffect(()=>{    
        champions()
    }, [])
    
    // const [champion, setChampion] = useState([])
    // useEffect(() => {

    //     let quantidadeClasses = classe.length;

    //     for (let index = 0; index < quantidadeClasses; index++) {
    //         apiLol.get(`/classe/${index + 1}/hero`)
    //             .then(resultado => {
    //                 setChampion(champion => champion.concat(resultado.data))
    //             });
    //     }
    // },  [classe.length]);

    // useEffect(() => {
    //     console.log(champion)
    // },  [champion]);



    return(
        <>
            <Header/>
            <div className='campeoesMain'>
                <div className='containerCards'>
                    {
                        champion.map( (item) =>{
                            return(
                                <Card obj={item} key={item.id}/>
                            )
                        })
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}