import { Link } from "react-router-dom";
import logo from '../../assets/images/riot-logo.png'
import '../../assets/styles/header/header.css'


const Header = () =>{

    return(
        <header>
            <ul>
                <div className="containerLogo">
                    <img src={logo} alt="Riot logo" className="logo" />
                    <div>
                        <label className="titleLogo">RIOT</label>
                        <p className="Subtitle">Games</p>
                    </div>
                </div>
                <li>
                    <Link className="links botao transparent" to='/'>O jogo</Link>
                </li>
                <li>
                    <a className="links" href="https://www.leagueoflegends.com/pt-br/news/game-updates/">Notícias</a>
                </li>
                <li>
                    <Link className="links botao transparent" to='/campeoes'>campeões</Link>
                </li>
                <li>
                    <a className="links" href="https://www.leagueoflegends.com/pt-br/news/tags/patch-notes/">atualizações</a>
                </li>           
            </ul>
        </header>
    )
        

}

export default Header