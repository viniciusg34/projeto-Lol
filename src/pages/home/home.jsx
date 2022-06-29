import '../../assets/styles/home/home.css'
import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import React from 'react';


export const Home = () =>{

    return(
        <>
            <Header/>
            <div className="home">
                <iframe 
                width="700" height="393" src="https://www.youtube.com/embed/iL4xAv9Fp5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className='homePlayer'>
                </iframe>
                <p className='homeParagraph'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, minus magnam eaque at accusantium veritatis voluptatibus. Veritatis saepe quas dolorum ut vero, ex nam asperiores. Sapiente voluptas modi, ratione laboriosam at voluptatem esse? Ad nisi quo itaque rem perspiciatis iste numquam ratione ipsa ipsum excepturi ducimus sunt, laudantium facere dolor reiciendis nostrum fugit quae atque. Sint amet voluptates fugiat nobis impedit tempore? Dolores aliquid ipsum mollitia aspernatur natus nobis sequi iure! Iste ea debitis, esse nesciunt iure enim modi placeat sapiente ipsa possimus! Distinctio voluptatem, consequatur adipisci ipsum voluptatibus quam ut, tempora aliquid commodi modi nemo, maxime neque molestiae omnis.
                </p>
            </div>
            <Footer/>
        </>
    )
        

}