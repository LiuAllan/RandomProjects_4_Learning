import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class SquareOld extends React.Component {
// //Don't need this constructor anymore because Square no longer keeps track of the game's state
// constructor(props)
// {
//   //Need to always call super when defining constructor of a subclass
//   super(props);
//   //current value that is clicked is saved
//   this.state = {
//     //the initial value shown in the board upon rendering the first time
//     value: null,
//   };
// }

  render() {
    return (
      // <button className="square" onClick={function() {alert('click');}}>
      //   {this.props.value}
      // </button>

      // Two code are the same, we use arrow functions. It returns immediately.
      // Forgetting () => and writing onClick={alert('click')} is a common mistake, and would fire the alert every time the component re-renders.
      <button 
        className="square"
        //re-render this square whenever <button> is clicked
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

//Converted old component to function component
function Square(props)
{
  return (
    <button 
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // constructor(props)
  // {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     //Each time a turn is taken, the boolean value for xIsNext is flipped
  //     xIsNext: true,
  //   };
  // }

  // handleClick(i)
  // {
  //   //slice() creates a copy of the squares array to modify instead of modifying existing array
  //   // after every move
  //   const squares = this.state.squares.slice();

  //   //end the function early if someone has won
  //   if (calculateWinner(squares) || squares[i])
  //   {
  //     return;
  //   }

  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     //Flip the boolean value after clicking
  //     xIsNext: !this.state.xIsNext,
  //   });
  // }

  renderSquare(i) {
    return (
      <Square
        //We pass 2 props to Square. OnClick is a function that Square can call when clicked
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    //   let status;
    //   if (winner)
    //   {
    //     status = 'Winner: '+ winner;
    //   }
    //   else
    //   {
    //     status = 'Next player: ' + (this.state.xIsNext ? 'X':'O');
    //   }

    //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    //We use let vs const when the variable changes

    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }


  handleClick(i)
  {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i])
    {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X':'O';
    this.setState({
      //concat() does not mutate the original array
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step)
  {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) ===0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step,move) => {
      const desc = move ? 'Go to move #'+ move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner)
    {
      status = 'Winner: ' + winner;
    }
    else
    {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X':'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

//Helper function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}