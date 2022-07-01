import React from 'react';
import '../../assets/styles/modal/modal.css'


export const Modal = (props) =>{

    return(
        <>
            <div className='modal'>
                <div className='containerInput'>
                    <label htmlFor="link" className='labelModal primeraLabel'>Imagen</label>
                    <input name='link' id='link' type="text" className='inputchampion' placeholder='insira o link da imagem' />
                </div>
                <div className='containerInput'>
                    <label htmlFor="nome" className='labelModal'>Nome</label>
                    <input name='nome' id='nome' type="text" className='inputchampion' placeholder='insira o nome do champion' />
                </div>
                <div className='containerInput'>
                    <label htmlFor="preco" className='labelModal'>preço</label>
                    <input name='preco' id='preco' type="number" className='inputchampion' placeholder='digite o preço do champion' />
                </div>
            </div>
        </>
    )
}

export default Modal