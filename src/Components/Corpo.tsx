import "./corpo.css";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Slider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export function Corpo() {
  return (
    <div>
      <nav>
        <div className="cabecalho">
          <ul> Nossas lojas </ul>
          <ul> Tenha sua loja</ul>
          <ul>Regulamentos</ul>
          <ul> acessibilidade</ul>
          <ul> Guia de Segurança</ul>
          <ul>Atendimento</ul>
          <ul> Compre pelo tel: 0800 773 3838</ul>
          <ul>Meus Pedidos</ul>
        </div>
        <div className="search">
          <div className="title">
            <h1>Magalu</h1>
          </div>
          <input
            type="text"
            name="search"
            placeholder="Procure por codigo, nome, marca"
          ></input>
          <div className="links">
            <p>
              Bem Vindo :)
              <span>
                {" "}
                <a href=" "> Entre ou cadastre-se</a>
              </span>{" "}
            </p>

            <p>
              Ofertas em{" "}
              <span>
                <AddLocationIcon className="Icon" /> em Franca 14406-636
              </span>
            </p>
            <p>
              {" "}
              <FavoriteIcon />
            </p>
            <p>
              {" "}
              <LocalMallIcon />{" "}
            </p>
          </div>
        </div>
        <div className="menu">
          <ul>
            <DehazeIcon />
          </ul>
          <ul> Todos os Departamentos</ul>
          <ul>Ofertas do Dia</ul>
          <ul>Celulares</ul>
          <ul>Moveis</ul>
          <ul>Eletronicos</ul>
          <ul>TV e Video</ul>
          <ul>Informatica</ul>
          <ul> Saldão</ul>
          <ul>Baixe o SuperApp</ul>
          <ul>
            {" "}
            <span>
              <CreditCardIcon className="IconCard" />
            </span>{" "}
            Cartão Magalu{" "}
          </ul>
        </div>
      </nav>
      <div className="Fotos">
        <img src="img/0407menu.png " />

        <img src="img/1301_promo.png" />

        <img src="img/bannermenued.png" />
      </div>
      <div className="container-Icons">
        <h3>Tem no Magalu</h3>
        <div className="Icones">
          <img src="./img/cliente.png" />
        </div>
        <div className="Icones">
          <img src="./img/desconto.png" />
        </div>
        <div className="Icones">
          <img src="./img/cesta.png" />
        </div>
        <div className="Icones">
          <img src="./img/letra-n.png" />
        </div>
        <div className="Icones">
          <img src="./img/camiseta.png" />
        </div>
        <div className="Icones">
          <img src="./img/artigos-de-higiene.png" />
        </div>
        <div className="Icones">
          <img src="./img/livro.png" />
        </div>
        <div className="Icones">
          <img src="./img/colegas-de-trabalho.png" />
        </div>
        <div className="Icones">
          <img src="./img/binoculos.png" />
        </div>
      </div>
      <div className="container-input">
        <img src="./img/redacao.png"/>
        <h1>Se conecte com a gente!</h1>
        <h5>Receba ofertas recomendadas e preços exclusivos!</h5>
        <h6> Leia a Política de Privacidade</h6>
        <input type="text" placeholder="Digite seu nome" />
        <input type="text" placeholder="Digite seu e-mail" />
        <button>Cadastrar</button>
      </div>
    </div>
  );
}
