import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function MyButton() {
//     return (
//         <button>
//             Я кнопка
//         </button>
//     );
// }
//
// export default function MyApp() {
//     return (
//         <div>
//             <h1>Ласкаво просимо до мого додатку</h1>
//             <MyButton />
//         </div>
//     );
// }

// const user = {
//     name: 'Геді Ламар',
//     imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize: 90,
// };
//
// export default function Profile() {
//     return (
//         <>
//             <h1>{user.name}</h1>
//             <img
//                 className="avatar"
//                 src={user.imageUrl}
//                 alt={'Фото ' + user.name}
//                 style={{
//                     width: user.imageSize,
//                     height: user.imageSize
//                 }}
//             />
//         </>
//     );
// }

// const products = [
//     { title: 'Капуста', isFruit: false, id: 1 },
//     { title: 'Часник', isFruit: false, id: 2 },
//     { title: 'Яблуко', isFruit: true, id: 3 },
// ];
//
// export default function ShoppingList() {
//     const listItems = products.map(product =>
//         <li
//             key={product.id}
//             style={{
//                 color: product.isFruit ? 'пурпуровий' : 'темно-зелений'
//             }}
//         >
//             {product.title}
//         </li>
//     );
//
//     return (
//         <ul>{listItems}</ul>
//     );
// }



// function Square({ value, onSquareClick }) {
//     return (
//         <button className="square" onClick={onSquareClick}>
//             {value}
//         </button>
//     );
// }
//
// function Board({ xIsNext, squares, onPlay }) {
//     function handleClick(i) {
//         if (calculateWinner(squares) || squares[i]) {
//             return;
//         }
//         const nextSquares = squares.slice();
//         if (xIsNext) {
//             nextSquares[i] = 'X';
//         } else {
//             nextSquares[i] = 'O';
//         }
//         onPlay(nextSquares);
//     }
//
//     const winner = calculateWinner(squares);
//     let status;
//     if (winner) {
//         status = 'Winner: ' + winner;
//     } else {
//         status = 'Next player: ' + (xIsNext ? 'X' : 'O');
//     }
//
//     return (
//         <>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//                 <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//                 <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//             </div>
//             <div className="board-row">
//                 <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//                 <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//                 <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//             </div>
//             <div className="board-row">
//                 <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//                 <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//                 <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//             </div>
//         </>
//     );
// }
//
// export default function Game() {
//     const [history, setHistory] = useState([Array(9).fill(null)]);
//     const [currentMove, setCurrentMove] = useState(0);
//     const xIsNext = currentMove % 2 === 0;
//     const currentSquares = history[currentMove];
//
//     function handlePlay(nextSquares) {
//         const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
//         setHistory(nextHistory);
//         setCurrentMove(nextHistory.length - 1);
//     }
//
//     function jumpTo(nextMove) {
//         setCurrentMove(nextMove);
//     }
//
//     const moves = history.map((squares, move) => {
//         let description;
//         if (move > 0) {
//             description = 'Go to move #' + move;
//         } else {
//             description = 'Go to game start';
//         }
//         return (
//             <li key={move}>
//                 <button onClick={() => jumpTo(move)}>{description}</button>
//             </li>
//         );
//     });
//
//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
//             </div>
//             <div className="game-info">
//                 <ol>{moves}</ol>
//             </div>
//         </div>
//     );
// }
//
// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }


// function Profile() {
//     return (
//         <img
//             src="https://i.imgur.com/MK3eW3As.jpg"
//             alt="Кетерін Джонсон (Katherine Johnson)"
//         />
//     );
// }
//
// export default function Gallery() {
//     return (
//         <section>
//             <h1>Видатні вчені</h1>
//             <Profile />
//             <Profile />
//             <Profile />
//         </section>
//     );
// }

// export default function App() {
//     return (
//         <Toolbar
//             onPlayMovie={() => alert('Playing!')}
//             onUploadImage={() => alert('Uploading!')}
//         />
//     );
// }
//
// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <div>
//             <Button onClick={onPlayMovie}>
//                 Play Movie
//             </Button>
//             <Button onClick={onUploadImage}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }
//
// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// export default function Form() {
//     const [to, setTo] = useState('Alice');
//     const [message, setMessage] = useState('Hello');
//
//     function handleSubmit(e) {
//         e.preventDefault();
//         setTimeout(() => {
//             alert(`You said ${message} to ${to}`);
//         }, 5000);
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 To:{' '}
//                 <select
//                     value={to}
//                     onChange={e => setTo(e.target.value)}>
//                     <option value="Alice">Alice</option>
//                     <option value="Bob">Bob</option>
//                 </select>
//             </label>
//             <textarea
//                 placeholder="Message"
//                 value={message}
//                 onChange={e => setMessage(e.target.value)}
//             />
//             <button type="submit">Send</button>
//         </form>
//     );
// }



// export default function Counter() {
//     const [score, setScore] = useState(0);
//
//     function increment() {
//         setScore(score + 1);
//     }
//
//     return (
//         <>
//             <button onClick={() => increment()}>+1</button>
//             <button onClick={() => {
//                 increment();
//                 increment();
//                 increment();
//             }}>+3</button>
//             <h1>Score: {score}</h1>
//         </>
//     )
// }


// import { useEffect } from 'react';
//
// export default function StatusBar() {
//     const [isOnline, setIsOnline] = useState(true);
//     useEffect(() => {
//         function handleOnline() {
//             setIsOnline(true);
//         }
//         function handleOffline() {
//             setIsOnline(false);
//         }
//         window.addEventListener('online', handleOnline);
//         window.addEventListener('offline', handleOffline);
//         return () => {
//             window.removeEventListener('online', handleOnline);
//             window.removeEventListener('offline', handleOffline);
//         };
//     }, []);
//
//     return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }


