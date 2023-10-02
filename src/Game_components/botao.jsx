// Componente de botão para cada quadrado do tabuleiro
export default function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
        {value}
        </button>
    );
}