import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <footer className="rodape">
            <div className="rodape__mensagem">
                <h3 className="mensagem__titulo">Testar o Premium de graça</h3>
                <p>Inscreva-se para curtir musica ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito</p>
            </div>
            <button className="rodape__inscreva-btn">
                <span>Inscreva-se grátis</span>
            </button>
        </footer>
    )
};

export default Footer;