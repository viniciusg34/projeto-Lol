import { Link } from "react-router-dom";
import logo from '../../assets/images/riot-logo.png'
import '../../assets/styles/header/header.css'


const Header = () =>{

    return(
        <header>
            <div>
                <img className='logo' src={logo} alt="riot games" />
            </div>
            <ul>
                <li>
                    <button className="botao transparent">
                        <Link className="links" to='/'>O jogo</Link>
                    </button>
                </li>
                <li>
                   <button className="botao transparent">
                        <Link className="links" to='/campeoes'>campeões</Link>
                    </button>
                </li>
                <li>
                    <button className="botao transparent">
                        <a className="links" href="https://www.leagueoflegends.com/pt-br/news/game-updates/">Notícias</a>
                    </button>
                </li>
                <li>
                    <button className="botao transparent">
                        <a className="links" href="https://www.leagueoflegends.com/pt-br/news/tags/patch-notes/">atualizações</a>
                    </button>
                </li>           
            </ul>
        </header>
    )
        

}

export default Header