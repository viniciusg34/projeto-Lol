import React from 'react';
import '../../assets/styles/modal/modal.css'


export const Modal = (props) =>{

    return(
        <>
            <div className='blackBackground'></div>
            <div className='modal'>
                <div className='inputBackground'></div>
                <div className='containerInput position1'>
                    <label htmlFor="link" className='labelModal primeraLabel'>Imagen</label>
                    <input name='link' id='link' type="text" className='inputchampion' placeholder='insira o link da imagem' />
                </div>
                <div className='inputBackground'></div>
                <div className='containerInput position2'>
                    <label htmlFor="nome" className='labelModal'>Nome</label>
                    <input name='nome' id='nome' type="text" className='inputchampion' placeholder='insira o nome do champion' />
                </div>
                <div className='inputBackground'></div>
                <div className='containerInput position3'>
                    <label htmlFor="preco" className='labelModal'>preço</label>
                    <input name='preco' id='preco' type="number" className='inputchampion' placeholder='digite o preço do champion' />
                </div>
            </div>
        </>
    )
}

export default Modal