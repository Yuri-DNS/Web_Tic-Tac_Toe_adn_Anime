import Square from "./botao.jsx";
import calculateWinner from "./vencedor.jsx";

  
// Componente do tabuleiro principal
export default function Board({ xIsNext, squares, onPlay }) {
    // Função para lidar com cliques nos quadrados
    function handleClick(i) {
        // Verifica se há um vencedor ou se o quadrado já está preenchido
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        // Cria uma cópia dos quadrados e preenche com 'X' ou 'O' com base no jogador atual
        const nextSquares = squares.slice();
        if (xIsNext) {
        nextSquares[i] = 'X';
        } else {
        nextSquares[i] = 'O';
        }
        // Chama a função de callback para atualizar o estado do jogo
        onPlay(nextSquares);
    }

    // Calcula o vencedor (se houver)
    const winner = calculateWinner(squares);
    let status;
    let finish;
    if (winner) {
        status = null;
        finish = 'Vencedor: ' + winner;
    } else {
        status = 'Jogador: ' + (xIsNext ? 'X' : 'O');
    }


    return (
        <>
        <div className="status">{status}</div>
        <div className="finish">{finish}</div>
        <div className="board-row">
            {/* Renderiza os quadrados do tabuleiro */}
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        </>
    );
}

