import React, {useState} from "react";

export default function AnimeList (){
    const [info, setInfo] = useState({});
    const [text, setText] = useState({text: ''});

    //buscar as informacoes
    function getInformacoes(){
        fetch('https://kitsu.io/api/edge/anime?filter[text]='+text+'&page[limit]=20')
        .then((response) => response.json())
        .then((response) => {setInfo(response), console.log(response);
        });
    }

    const handlingText = (e) => {
        setText(e.target.value) // Define o estado 'text' com o valor do campo de entrada
    }

    return(
        <>
            <div className="API">
                <h1>animes</h1>
                <div>
                    <input type="text" onChange={(e) => handlingText(e)} placeholder="Principais(ou nome)"></input>
                    <button onClick={getInformacoes}>Pesquisar</button>
                </div>
                <div>
                    {info.data && (
                        <ul className="Anime_List">
                            {info.data.map((anime) => (
                                <li key={anime.id}>
                                    <img src={anime.attributes.posterImage.small} alt="" />
                                    <p><b>Titulo:</b> {anime.attributes.canonicalTitle}</p>
                                    <p><b>Status:</b> {anime.attributes.status}</p>
                                    <p><b>Classificação:</b> {anime.attributes.ageRatingGuide}</p>
                                    <p><b>Nº.Ep(Cap):</b> {anime.attributes.episodeCount}</p>
                                    <p><b>Início:</b> {anime.attributes.startDate}</p>
                                    <p><b>Fim:</b> {anime.attributes.endDate}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    )
}