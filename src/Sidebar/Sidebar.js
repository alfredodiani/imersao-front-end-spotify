import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return(
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <img src={logoSpotify} alt="Logo do Spotify"/>
                </div>

                <ul>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faHome}/> </span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span><FontAwesomeIcon icon={faSearch}/> </span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa"><FontAwesomeIcon icon={faBook}/> </span>
                        <span>Sua Biblioteca</span>
                    </button>
                    <spam><FontAwesomeIcon icon={faPlus}/> </spam>
                </div>
                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É facil, vamos te ajudar</span>
                        <button className="section-playlist__button">
                            <span>Criar Playlist</span>
                        </button>
                    </div>
                </section>
                <div className="cookies">
                    <a href="">Cookies</a>
                </div>
                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe}/> </span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;