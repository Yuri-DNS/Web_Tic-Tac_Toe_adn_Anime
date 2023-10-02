import { useState } from 'react'
import Board from '../../Game_components/tabuleiro.jsx'


export default function Game() {
    // Renderiza o componente do tabuleiro
    <Board/>
  
    // Define o estado inicial do histórico e da jogada atual
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0; // Determina se é a vez do jogador X
    const currentSquares = history[currentMove]; // Obtém o estado atual do tabuleiro
    
    // Função para lidar com uma jogada
    function handlePlay(nextSquares) {
      // Cria uma nova cópia do histórico com a jogada atualizada
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      // Atualiza o estado do histórico e da jogada atual
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }
  
    // Função para reiniciar o jogo
    function resetGame() {
      // Define o estado inicial do histórico e da jogada atual
      setHistory([Array(9).fill(null)]);
      setCurrentMove(0);
    }
  
    // Renderiza o componente do jogo da velha
    return (
      <>
        <div className='game_base'>
            <div className='title'>
                <h1>Jogo da Velha</h1>
            </div>
            <div className="game">
                <div className="game-board">
                        {/* Renderiza o componente do tabuleiro com as propriedades adequadas */}
                        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                        <hr/>
                    <div className='reset'>
                        {/* Botão para reiniciar o jogo */}
                        <button onClick={resetGame}>Reiniciar Jogo</button>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}