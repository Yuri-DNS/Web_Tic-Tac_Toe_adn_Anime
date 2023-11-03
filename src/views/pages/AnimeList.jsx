import {useEffect, useState} from "react";
import axios from "axios";

export default function AnimeList (){

    const [text, setText] = useState({text: ''});
    const [info, setInfo] = useState({});

    // Função para tratar a tecla Enter pressionada
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            getInformacoes();
        }
    }

    //buscar as informacoes
    function getInformacoes(){
        axios.get('https://kitsu.io/api/edge/anime?filter[text]='+text+'&page[limit]=20')
        .then(response => {
            setInfo(response.data)
        })
        
        // !! Função para teste !! Mostra o retorno no console como um objeto Javascript
        /*

        if(text) {
            fetch('https://kitsu.io/api/edge/anime?filter[text]='+text+'&page[limit]=20')
             .then((response) => response.json())
             .then((response) => {
                console.log(response);
             });
        }
        
        */
    }

    const handlingText = (e) => {
        setText(e.target.value) // Define o estado 'text' com o valor do campo de entrada
    }

    return(
        <>
            <div className="API">
                <h1>Anime List</h1>
                <div>
                    <input type="text" onChange={(e) => handlingText(e)} onKeyDown={(e) => handleKeyDown(e)} placeholder="Nome(ou aleatório)"/>
                    <button onClick={getInformacoes}>Pesquisar</button>
                </div>
                <div>
                    {info.data && (
                        <ul className="Anime_List">
                            {info.data.map((anime) => (
                                <li key={anime.id}>
                                    <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
                                    <p><b>Titulo:</b> {anime.attributes.canonicalTitle}</p>
                                    <p><b>Status:</b> {anime.attributes.status}</p>
                                    <p><b>Classificação:</b> {anime.attributes.ageRatingGuide}</p>
                                    <p><b>Nº.Ep(Cap):</b> {anime.attributes.episodeCount}</p>
                                    <p><b>Início:</b> {anime.attributes.startDate}</p>
                                    <p><b>Fim:</b> {anime.attributes.endDate}</p>
                                    <p><a href={`https://animesonlinecc.to/search/${encodeURIComponent(anime.attributes.canonicalTitle.split(' ').slice(0, 2).join(' '))}`} target="_blank"><button>Buscar no Animesonline</button></a></p>
                                    <p><a href={`https://animefire.vip/pesquisar/${encodeURIComponent(anime.attributes.canonicalTitle.split(' ').slice(0, 2).join('-'))}`} target="_blank"><button>Buscar no AnimeFire</button></a></p>
                                    {/* {`https://animesonlinecc.to/search/${encodeURIComponent(anime.attributes.canonicalTitle.split(' ').slice(0, 2).join(' '))}`} 
                                        
                                        Aqui é feita a busca no endereço indicado apenas das duas primeiras palavras encontras no atributo -> canonicalTitle
                                    */}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}